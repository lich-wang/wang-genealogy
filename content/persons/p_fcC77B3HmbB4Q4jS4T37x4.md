---
schema: wang-person/v1
id: p_fcC77B3HmbB4Q4jS4T37x4
status: active
merged_into: null
display_name: 王士汲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XPEM4JkCDFS4jnBifcCzDN
        subject_person_id: p_fcC77B3HmbB4Q4jS4T37x4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士汲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_feEytesM37MHNLbntytz1f
          claim_id: c_XPEM4JkCDFS4jnBifcCzDN
          source_id: s_N1Z5BNKpKStbWp8Kz7HT2W
          stance: supports
          locator: CBDB:577452
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（577452）
          source: &a1
            id: s_N1Z5BNKpKStbWp8Kz7HT2W
            source_type: api_record
            title: 中国历代人物传记资料库：王士汲（CBDB 577452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577452&o=json
            external_identifier: CBDB:577452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.722Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p9Y1C9fUr2jajpUpQsqNz5
        subject_person_id: p_fcC77B3HmbB4Q4jS4T37x4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士汲，清人物。籍贯歙縣，身份为商人、孝子/孝女。（中国历代人物传记资料库 CBDB 577452）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KY73gibCV7ZraM7gOP8_Cg
          claim_id: c_p9Y1C9fUr2jajpUpQsqNz5
          source_id: s_N1Z5BNKpKStbWp8Kz7HT2W
          stance: supports
          locator: CBDB:577452
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dI1hEMUbyU2fkckr5VGPxs
        subject_person_id: p_wRrt2tMqBSJLECrVdcnwHh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fcC77B3HmbB4Q4jS4T37x4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OxClP91_S9lbmx7GsyBJx6
          claim_id: c_dI1hEMUbyU2fkckr5VGPxs
          source_id: s_N1Z5BNKpKStbWp8Kz7HT2W
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1163758：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wRrt2tMqBSJLECrVdcnwHh
        status: active
        display_name: 王華順
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士汲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士汲 | accepted |
| bio.summary | 王士汲，清人物。籍贯歙縣，身份为商人、孝子/孝女。（中国历代人物传记资料库 CBDB 577452） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wRrt2tMqBSJLECrVdcnwHh | 王華順 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士汲（CBDB 577452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577452&o=json)
