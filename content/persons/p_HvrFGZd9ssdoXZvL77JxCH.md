---
schema: wang-person/v1
id: p_HvrFGZd9ssdoXZvL77JxCH
status: active
merged_into: null
display_name: 王叔果
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FFNbB17YB3ciJy42NV56y1
        subject_person_id: p_HvrFGZd9ssdoXZvL77JxCH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔果
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NSayjmGdBmG3s6DFwHQUM8
          claim_id: c_FFNbB17YB3ciJy42NV56y1
          source_id: s_GN5o4imfHDxMaZZ1KnUof4
          stance: supports
          locator: CBDB:328621
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328621）
          source: &a1
            id: s_GN5o4imfHDxMaZZ1KnUof4
            source_type: api_record
            title: 中国历代人物传记资料库：王叔果（CBDB 328621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328621&o=json
            external_identifier: CBDB:328621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.304Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G968WrsYi8mW9d4xG7KP4f
        subject_person_id: p_HvrFGZd9ssdoXZvL77JxCH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔果，明人物。嘉靖四十一年進士，籍贯永嘉，曾任布政使司右參議。（中国历代人物传记资料库 CBDB 328621）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sYrKUmVaPTzG57I1gvyUs9
          claim_id: c_G968WrsYi8mW9d4xG7KP4f
          source_id: s_GN5o4imfHDxMaZZ1KnUof4
          stance: supports
          locator: CBDB:328621
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DZ26mBL7bLcPDF6KfodQbg
        subject_person_id: p_gFygQ7tuxUBRH1guyqGQYP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HvrFGZd9ssdoXZvL77JxCH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jSSQ3pTduz9C17lHRG3JBa
          claim_id: c_DZ26mBL7bLcPDF6KfodQbg
          source_id: s_W5L9791aZMz7UBjKQaAsjr
          stance: supports
          locator: CBDB：兄弟 王叔杲（126579）之父／母 王澈
          quotation: null
          interpretation_note: 由兄弟关系推断：王叔果 与 王叔杲 为同胞（CBDB 记「弟」），王叔杲 之父／母即 王叔果 之父／母。
          source:
            id: s_W5L9791aZMz7UBjKQaAsjr
            source_type: api_record
            title: 中国历代人物传记资料库：王叔果（CBDB 328621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328621&o=json
            external_identifier: CBDB:328621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gFygQ7tuxUBRH1guyqGQYP
        status: active
        display_name: 王澈
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ju9R6MK2R-gn7LkryRwAB5
        subject_person_id: p_2q5oLPYeHNC3ozo65nG5VF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HvrFGZd9ssdoXZvL77JxCH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L54OlJ0idZB8Dbknyvb0lA
          claim_id: c_ju9R6MK2R-gn7LkryRwAB5
          source_id: s_W5L9791aZMz7UBjKQaAsjr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126579 王叔杲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_W5L9791aZMz7UBjKQaAsjr
            source_type: api_record
            title: 中国历代人物传记资料库：王叔果（CBDB 328621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328621&o=json
            external_identifier: CBDB:328621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2q5oLPYeHNC3ozo65nG5VF
        status: active
        display_name: 王叔杲
        merged_into_person_id: null
---

# 王叔果

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔果 | accepted |
| bio.summary | 王叔果，明人物。嘉靖四十一年進士，籍贯永嘉，曾任布政使司右參議。（中国历代人物传记资料库 CBDB 328621） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gFygQ7tuxUBRH1guyqGQYP | 王澈 | accepted |
| other | p_2q5oLPYeHNC3ozo65nG5VF | 王叔杲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王叔果（CBDB 328621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328621&o=json)
