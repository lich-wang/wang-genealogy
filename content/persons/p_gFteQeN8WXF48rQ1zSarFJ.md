---
schema: wang-person/v1
id: p_gFteQeN8WXF48rQ1zSarFJ
status: active
merged_into: null
display_name: 袁鴻
revision: 1
cbdb_id: 85806
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nFiv9BltTzKCU23EN6psvN
        subject_person_id: p_gFteQeN8WXF48rQ1zSarFJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 袁鴻（生於1762），清人物。籍贯吳江。（中国历代人物传记资料库 CBDB 85806）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TOdFT8ejwfqubGy0ZdEdKM
          claim_id: c_nFiv9BltTzKCU23EN6psvN
          source_id: s_JhoBlSRFLDMUIcY0rp6-zh
          stance: supports
          locator: CBDB:85806
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JhoBlSRFLDMUIcY0rp6-zh
            source_type: api_record
            title: 中国历代人物传记资料库：袁鴻（CBDB 85806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=85806&o=json
            external_identifier: CBDB:85806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dfgfdJZOMRZ17Djg7Wyqr-
        subject_person_id: p_gFteQeN8WXF48rQ1zSarFJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 袁鴻
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3DcnzVTzrFs6cP23GuelcY
          claim_id: c_dfgfdJZOMRZ17Djg7Wyqr-
          source_id: s_JhoBlSRFLDMUIcY0rp6-zh
          stance: supports
          locator: CBDB:85806
          quotation: null
          interpretation_note: CBDB 明确记录的王蕙芳配偶
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
        id: c_FvN9yINUoBICu4RFha60sC
        subject_person_id: p_54VkfHNeJit8Q8Qe28BrtD
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gFteQeN8WXF48rQ1zSarFJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4tR_EBoJEGXcUE9kboFH9v
          claim_id: c_FvN9yINUoBICu4RFha60sC
          source_id: s_JhoBlSRFLDMUIcY0rp6-zh
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1147, HuWenKai #491：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_54VkfHNeJit8Q8Qe28BrtD
        status: active
        display_name: 王蕙芳
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 袁鴻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 袁鴻（生於1762），清人物。籍贯吳江。（中国历代人物传记资料库 CBDB 85806） | accepted |
| name.primary | 袁鴻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_54VkfHNeJit8Q8Qe28BrtD | 王蕙芳 | accepted |

## 外部来源

- [中国历代人物传记资料库：袁鴻（CBDB 85806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=85806&o=json)
