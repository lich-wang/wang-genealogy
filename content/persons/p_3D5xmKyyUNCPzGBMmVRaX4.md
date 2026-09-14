---
schema: wang-person/v1
id: p_3D5xmKyyUNCPzGBMmVRaX4
status: active
merged_into: null
display_name: 王崇祖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AoEh1BtAskQqd7eMymvx8y
        subject_person_id: p_3D5xmKyyUNCPzGBMmVRaX4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8pDj7VAspH8oi9pUxZVbYb
          claim_id: c_AoEh1BtAskQqd7eMymvx8y
          source_id: s_2EQPmWUCCxmfr55Av594s9
          stance: supports
          locator: CBDB:236270
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236270）
          source: &a1
            id: s_2EQPmWUCCxmfr55Av594s9
            source_type: api_record
            title: 中国历代人物传记资料库：王崇祖（CBDB 236270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236270&o=json
            external_identifier: CBDB:236270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.777Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xnqoF2eQW44D6Bom8i1rwo
        subject_person_id: p_3D5xmKyyUNCPzGBMmVRaX4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇祖，明人物。籍贯同州。（中国历代人物传记资料库 CBDB 236270）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vsylMm20k4nnx9zTFmu1-L
          claim_id: c_xnqoF2eQW44D6Bom8i1rwo
          source_id: s_2EQPmWUCCxmfr55Av594s9
          stance: supports
          locator: CBDB:236270
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jj2pznz8YnHHJs93Lus_S3
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3D5xmKyyUNCPzGBMmVRaX4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cty398OZmCacpTop9qAYh1
          claim_id: c_jj2pznz8YnHHJs93Lus_S3
          source_id: s_SBMUYS9fJTsDZ5Jqsy0iLA
          stance: supports
          locator: CBDB：兄弟 王弘祖（207804）之父／母 王應誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇祖 与 王弘祖 为同胞（CBDB 记「兄」），王弘祖 之父／母即 王崇祖 之父／母。
          source:
            id: s_SBMUYS9fJTsDZ5Jqsy0iLA
            source_type: api_record
            title: 中国历代人物传记资料库：王崇祖（CBDB 236270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236270&o=json
            external_identifier: CBDB:236270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8EDFnNdhzDymseXpHLiztk
        status: active
        display_name: 王應誥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5K99roY4mRNsv3WWkiAesS
        subject_person_id: p_3D5xmKyyUNCPzGBMmVRaX4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Q4mq6fygocp26TN7xUYfs3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i3XNq4Rl0vCqQjVS3aXRoP
          claim_id: c_5K99roY4mRNsv3WWkiAesS
          source_id: s_SBMUYS9fJTsDZ5Jqsy0iLA
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207804 王弘祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SBMUYS9fJTsDZ5Jqsy0iLA
            source_type: api_record
            title: 中国历代人物传记资料库：王崇祖（CBDB 236270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236270&o=json
            external_identifier: CBDB:236270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q4mq6fygocp26TN7xUYfs3
        status: active
        display_name: 王弘祖
        merged_into_person_id: null
---

# 王崇祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇祖 | accepted |
| bio.summary | 王崇祖，明人物。籍贯同州。（中国历代人物传记资料库 CBDB 236270） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8EDFnNdhzDymseXpHLiztk | 王應誥 | accepted |
| other | p_Q4mq6fygocp26TN7xUYfs3 | 王弘祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇祖（CBDB 236270）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236270&o=json)
