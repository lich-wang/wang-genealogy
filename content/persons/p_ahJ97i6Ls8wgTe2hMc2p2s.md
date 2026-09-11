---
schema: wang-person/v1
id: p_ahJ97i6Ls8wgTe2hMc2p2s
status: active
merged_into: null
display_name: 王荁
cbdb_id: 206722
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WggMwUR6WfBC6o33sQ44Tk
        subject_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王荁（生于1558年），明人物。中国历代人物传记资料库（CBDB）以人物编号 206722 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs__iOUn7L2yQatIiJTVEXN8M
          claim_id: c_WggMwUR6WfBC6o33sQ44Tk
          source_id: s_EuaLxK7Nr6Pv8DH4PRqcB8
          stance: supports
          locator: CBDB:206722
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_EuaLxK7Nr6Pv8DH4PRqcB8
            source_type: api_record
            title: 中国历代人物传记资料库：王荁（CBDB 206722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206722&o=json
            external_identifier: CBDB:206722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mwFegfQntbiJBHsf8hUaMR
        subject_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1558年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1558-01-01
            latest: 1558-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nK8NstFqg9zKibTdT4PATG
          claim_id: c_mwFegfQntbiJBHsf8hUaMR
          source_id: s_EuaLxK7Nr6Pv8DH4PRqcB8
          stance: supports
          locator: CBDB:206722
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1558
          source:
            id: s_EuaLxK7Nr6Pv8DH4PRqcB8
            source_type: api_record
            title: 中国历代人物传记资料库：王荁（CBDB 206722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206722&o=json
            external_identifier: CBDB:206722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Z1J4AqX9fP1Wy41WTGaWC
        subject_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王荁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bRPA67ofnpRPBRpF5PDCDP
          claim_id: c_4Z1J4AqX9fP1Wy41WTGaWC
          source_id: s_EuaLxK7Nr6Pv8DH4PRqcB8
          stance: supports
          locator: CBDB:206722
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1558
          source:
            id: s_EuaLxK7Nr6Pv8DH4PRqcB8
            source_type: api_record
            title: 中国历代人物传记资料库：王荁（CBDB 206722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206722&o=json
            external_identifier: CBDB:206722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_z8ukmA_UqTxSiZBttC4LwD
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d-FZuxMsMgTJIjvs2jDdoS
          claim_id: c_z8ukmA_UqTxSiZBttC4LwD
          source_id: s_WbFGM8GMG3mSMAr4ffnbF5
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WbFGM8GMG3mSMAr4ffnbF5
            source_type: api_record
            title: 中国历代人物传记资料库：王交（CBDB 222166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222166&o=json
            external_identifier: CBDB:222166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.363Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_miQBcK4jqJAfweCMT7iV4p
        status: active
        display_name: 王交
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王荁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王荁（生于1558年），明人物。中国历代人物传记资料库（CBDB）以人物编号 206722 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1558年 | accepted |
| name.primary | 王荁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_miQBcK4jqJAfweCMT7iV4p | 王交 | accepted |

## 外部来源

- [中国历代人物传记资料库：王荁（CBDB 206722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206722&o=json)
- [中国历代人物传记资料库：王交（CBDB 222166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222166&o=json)
