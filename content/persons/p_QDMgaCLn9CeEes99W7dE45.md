---
schema: wang-person/v1
id: p_QDMgaCLn9CeEes99W7dE45
status: active
merged_into: null
display_name: 王本固
cbdb_id: 126484
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NQqJdrn1qoqHQzQ5kFz8NA
        subject_person_id: p_QDMgaCLn9CeEes99W7dE45
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本固，明人物。中国历代人物传记资料库（CBDB）以人物编号 126484 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_BC7fnwp4JcdKkyjTwrLAt5
          claim_id: c_NQqJdrn1qoqHQzQ5kFz8NA
          source_id: s_n3tQiG7ddk76BGfwLpq5NH
          stance: supports
          locator: CBDB:126484
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_n3tQiG7ddk76BGfwLpq5NH
            source_type: api_record
            title: 中国历代人物传记资料库：王本固（CBDB 126484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126484&o=json
            external_identifier: CBDB:126484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jDMpZ2PCSAzHa2Mc9RiPDZ
        subject_person_id: p_QDMgaCLn9CeEes99W7dE45
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本固
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wvpPVZywoHGgADPdBmBvQP
          claim_id: c_jDMpZ2PCSAzHa2Mc9RiPDZ
          source_id: s_n3tQiG7ddk76BGfwLpq5NH
          stance: supports
          locator: CBDB:126484
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_n3tQiG7ddk76BGfwLpq5NH
            source_type: api_record
            title: 中国历代人物传记资料库：王本固（CBDB 126484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126484&o=json
            external_identifier: CBDB:126484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0H0sv9p2P5cSO0FELm5Zo0
        subject_person_id: p_qktKkUGNYP4b8noG6768Wh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QDMgaCLn9CeEes99W7dE45
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mnSQQvR1obJVXsNqmIQXs-
          claim_id: c_0H0sv9p2P5cSO0FELm5Zo0
          source_id: s_ZseAxGKVuPQ6CLhebMx2uz
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZseAxGKVuPQ6CLhebMx2uz
            source_type: api_record
            title: 中国历代人物传记资料库：王釗（CBDB 306581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306581&o=json
            external_identifier: CBDB:306581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.770Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qktKkUGNYP4b8noG6768Wh
        status: active
        display_name: 王釗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王本固

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王本固，明人物。中国历代人物传记资料库（CBDB）以人物编号 126484 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王本固 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qktKkUGNYP4b8noG6768Wh | 王釗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本固（CBDB 126484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126484&o=json)
- [中国历代人物传记资料库：王釗（CBDB 306581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306581&o=json)
