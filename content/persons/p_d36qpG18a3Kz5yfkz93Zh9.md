---
schema: wang-person/v1
id: p_d36qpG18a3Kz5yfkz93Zh9
status: active
merged_into: null
display_name: 王良士
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r2Am4jUnt6W57Ejd6Gb1iV
        subject_person_id: p_d36qpG18a3Kz5yfkz93Zh9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良士
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g1d7d2hzxTCr4G4pS2tP2w
          claim_id: c_r2Am4jUnt6W57Ejd6Gb1iV
          source_id: s_n2PPadRJg1rJA8qftABKUU
          stance: supports
          locator: CBDB:266084
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266084）
          source: &a1
            id: s_n2PPadRJg1rJA8qftABKUU
            source_type: api_record
            title: 中国历代人物传记资料库：王良士（CBDB 266084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266084&o=json
            external_identifier: CBDB:266084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.712Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W6azrgPQrQ5XEnEgA9wLHS
        subject_person_id: p_d36qpG18a3Kz5yfkz93Zh9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良士，明人物。弘治六年進士，籍贯陳州。（中国历代人物传记资料库 CBDB 266084）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g89pI790i8jZ7lsvTvj_MV
          claim_id: c_W6azrgPQrQ5XEnEgA9wLHS
          source_id: s_n2PPadRJg1rJA8qftABKUU
          stance: supports
          locator: CBDB:266084
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vzWhRzIYf5wBNlJOImOXvT
        subject_person_id: p_LzCu3N2C5U3pdrCETHd45i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_d36qpG18a3Kz5yfkz93Zh9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xq5hGHRGLuyksBFCREmUYD
          claim_id: c_vzWhRzIYf5wBNlJOImOXvT
          source_id: s_dzd1oAigpz11HEbita4cPf
          stance: supports
          locator: CBDB：兄弟 王良臣（126528）之父／母 王璋
          quotation: null
          interpretation_note: 由兄弟关系推断：王良士 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王良士 之父／母。
          source:
            id: s_dzd1oAigpz11HEbita4cPf
            source_type: api_record
            title: 中国历代人物传记资料库：王良士（CBDB 266084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266084&o=json
            external_identifier: CBDB:266084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LzCu3N2C5U3pdrCETHd45i
        status: active
        display_name: 王璋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_coHrndSBz5ctNAjes_i-Zk
        subject_person_id: p_d36qpG18a3Kz5yfkz93Zh9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_i98FVCHxFpmHEPq1xWByi6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K2Rs44kG__apigquTeyx0w
          claim_id: c_coHrndSBz5ctNAjes_i-Zk
          source_id: s_dzd1oAigpz11HEbita4cPf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126528 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dzd1oAigpz11HEbita4cPf
            source_type: api_record
            title: 中国历代人物传记资料库：王良士（CBDB 266084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266084&o=json
            external_identifier: CBDB:266084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_i98FVCHxFpmHEPq1xWByi6
        status: active
        display_name: 王良臣
        merged_into_person_id: null
---

# 王良士

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良士 | accepted |
| bio.summary | 王良士，明人物。弘治六年進士，籍贯陳州。（中国历代人物传记资料库 CBDB 266084） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LzCu3N2C5U3pdrCETHd45i | 王璋 | accepted |
| other | p_i98FVCHxFpmHEPq1xWByi6 | 王良臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良士（CBDB 266084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266084&o=json)
