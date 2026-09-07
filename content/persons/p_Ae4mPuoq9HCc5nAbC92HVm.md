---
schema: wang-person/v1
id: p_Ae4mPuoq9HCc5nAbC92HVm
status: active
merged_into: null
display_name: 何妙音
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_li4Xq2sCF24wKWnpVtfQBP
        subject_person_id: p_Ae4mPuoq9HCc5nAbC92HVm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 何妙音，明人物。CBDB 记录其籍贯记录为義烏，入仕记录为封贈。中国历代人物传记资料库（CBDB）以人物编号 28108 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IQCyIoN1C628h6EwtuGeRW
          claim_id: c_li4Xq2sCF24wKWnpVtfQBP
          source_id: s_MZEEtgSwS5K6ZCgN67np3E
          stance: supports
          locator: CBDB:28108
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MZEEtgSwS5K6ZCgN67np3E
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：何妙音（28108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28108&o=json
            external_identifier: CBDB:28108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:07.221Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_moQgk7A3Fbc8TNQi6dnV8E
        subject_person_id: p_Ae4mPuoq9HCc5nAbC92HVm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 何妙音
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_15diE9wE6eCmQ9hbYN2Cr7
          claim_id: c_moQgk7A3Fbc8TNQi6dnV8E
          source_id: s_cG26HhRBGUdLpNSBtczXX5
          stance: supports
          locator: Q45413311
          quotation: null
          interpretation_note: null
          source:
            id: s_cG26HhRBGUdLpNSBtczXX5
            source_type: api_record
            title: 维基数据：何妙音（Q45413311）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45413311
            external_identifier: Q45413311
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:07.031Z
            metadata_json: null
        - id: cs_uMUoFusBYv3ETxCn3R5uaE
          claim_id: c_moQgk7A3Fbc8TNQi6dnV8E
          source_id: s_MZEEtgSwS5K6ZCgN67np3E
          stance: supports
          locator: Q45413311
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
        id: c_imZaqKCriBUFBQ9NMMSjNW
        subject_person_id: p_Ae4mPuoq9HCc5nAbC92HVm
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_DNgcd12SMQT8sYhCTYL1PG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2gtawCpo1GQqc57W7K99dj
          claim_id: c_imZaqKCriBUFBQ9NMMSjNW
          source_id: s_bGXjMVpffDg5aNL8S5Rv3o
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_bGXjMVpffDg5aNL8S5Rv3o
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王褘（10726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10726&o=json
            external_identifier: CBDB:10726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:57.679Z
            metadata_json: null
        - id: cs_7pm64C3ciQzRRQsG1qE4SY
          claim_id: c_imZaqKCriBUFBQ9NMMSjNW
          source_id: s_W1kjo5RN2x5RDsfdWsS7S5
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_W1kjo5RN2x5RDsfdWsS7S5
            source_type: api_record
            title: 维基数据：王祎（Q15934970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934970
            external_identifier: Q15934970
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:31.010Z
            metadata_json: null
        - id: cs_iAJ9vnUr1auXQLAv98trYD
          claim_id: c_imZaqKCriBUFBQ9NMMSjNW
          source_id: s_cG26HhRBGUdLpNSBtczXX5
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_cG26HhRBGUdLpNSBtczXX5
            source_type: api_record
            title: 维基数据：何妙音（Q45413311）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45413311
            external_identifier: Q45413311
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:07.031Z
            metadata_json: null
      object_person:
        id: p_DNgcd12SMQT8sYhCTYL1PG
        status: active
        display_name: 王祎
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 何妙音

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 何妙音，明人物。CBDB 记录其籍贯记录为義烏，入仕记录为封贈。中国历代人物传记资料库（CBDB）以人物编号 28108 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 何妙音 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_DNgcd12SMQT8sYhCTYL1PG | 王祎 | accepted |

## 外部来源

- [维基数据：何妙音（Q45413311）](https://www.wikidata.org/wiki/Q45413311)
- [维基数据：王祎（Q15934970）](https://www.wikidata.org/wiki/Q15934970)
- [CBDB 中国历代人物传记资料库：何妙音（28108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28108&o=json)
- [CBDB 中国历代人物传记资料库：王褘（10726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10726&o=json)
