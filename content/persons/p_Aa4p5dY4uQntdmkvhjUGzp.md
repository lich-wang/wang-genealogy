---
schema: wang-person/v1
id: p_Aa4p5dY4uQntdmkvhjUGzp
status: active
merged_into: null
display_name: 张廉穆
cbdb_id: 142438
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8Po7YqSl_T4M5ADF1mMI8j
        subject_person_id: p_Aa4p5dY4uQntdmkvhjUGzp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张廉穆，唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 142438 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BlgDORckr7Ooz-FZlZpTyb
          claim_id: c_8Po7YqSl_T4M5ADF1mMI8j
          source_id: s_CwZyqVWP2vCdAKNTdmWMH3
          stance: supports
          locator: CBDB:142438
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CwZyqVWP2vCdAKNTdmWMH3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：張廉穆（142438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142438&o=json
            external_identifier: CBDB:142438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:24.661Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NoCCbk98GjJRVJADnzpFGM
        subject_person_id: p_Aa4p5dY4uQntdmkvhjUGzp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张廉穆
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FAaVa14svFY1AZUVrABKP5
          claim_id: c_NoCCbk98GjJRVJADnzpFGM
          source_id: s_MC8rYf4XBWZQNS3B86P2nK
          stance: supports
          locator: Q45575293
          quotation: null
          interpretation_note: null
          source:
            id: s_MC8rYf4XBWZQNS3B86P2nK
            source_type: api_record
            title: 维基数据：张廉穆（Q45575293）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45575293
            external_identifier: Q45575293
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:24.494Z
            metadata_json: null
        - id: cs_VxaA2sMPvCQa9WDp3Myhzf
          claim_id: c_NoCCbk98GjJRVJADnzpFGM
          source_id: s_CwZyqVWP2vCdAKNTdmWMH3
          stance: supports
          locator: Q45575293
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_z73ANbioYvtMyro1H9No7x
        subject_person_id: p_Aa4p5dY4uQntdmkvhjUGzp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_mqHUTcoC6qKorpaLxPNwqB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9d41Bb9MmQf7PJq7uXgsZD
          claim_id: c_z73ANbioYvtMyro1H9No7x
          source_id: s_MC8rYf4XBWZQNS3B86P2nK
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_MC8rYf4XBWZQNS3B86P2nK
            source_type: api_record
            title: 维基数据：张廉穆（Q45575293）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45575293
            external_identifier: Q45575293
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:24.494Z
            metadata_json: null
        - id: cs_rcCQFBKcmSYUAQQ5XohvHy
          claim_id: c_z73ANbioYvtMyro1H9No7x
          source_id: s_nADZ2afk4xJBJxwv4CoNCb
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌彙編續集
          source:
            id: s_nADZ2afk4xJBJxwv4CoNCb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王君愕（162072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162072&o=json
            external_identifier: CBDB:162072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:12.187Z
            metadata_json: null
        - id: cs_xbXZxKuUDWjMG2rbG2dqEY
          claim_id: c_z73ANbioYvtMyro1H9No7x
          source_id: s_7kiGuDzPHJYC65L25My9ZJ
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_7kiGuDzPHJYC65L25My9ZJ
            source_type: api_record
            title: 维基数据：王君愕（Q15909986）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15909986
            external_identifier: Q15909986
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:39.598Z
            metadata_json: null
      object_person:
        id: p_mqHUTcoC6qKorpaLxPNwqB
        status: active
        display_name: 王君愕
        merged_into_person_id: null
    - claim:
        id: c_EEhK4WEWO6I16o2BZ2pOLU
        subject_person_id: p_Aa4p5dY4uQntdmkvhjUGzp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_vk9KCwPkD1kqN7yjb4iSjS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O22h5FlkarPL_hss2HHoSO
          claim_id: c_EEhK4WEWO6I16o2BZ2pOLU
          source_id: s_G0SgXP7z2MgZt6xH5wgNg4
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yonghui33：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_G0SgXP7z2MgZt6xH5wgNg4
            source_type: api_record
            title: 中国历代人物传记资料库：王君愕（CBDB 162072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162072&o=json
            external_identifier: CBDB:162072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vk9KCwPkD1kqN7yjb4iSjS
        status: active
        display_name: 王君愕
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 张廉穆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 张廉穆，唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 142438 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 张廉穆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_mqHUTcoC6qKorpaLxPNwqB | 王君愕 | accepted |
| spouses | p_vk9KCwPkD1kqN7yjb4iSjS | 王君愕 | accepted |

## 外部来源

- [维基数据：王君愕（Q15909986）](https://www.wikidata.org/wiki/Q15909986)
- [维基数据：张廉穆（Q45575293）](https://www.wikidata.org/wiki/Q45575293)
- [中国历代人物传记资料库：王君愕（CBDB 162072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162072&o=json)
- [CBDB 中国历代人物传记资料库：張廉穆（142438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142438&o=json)
