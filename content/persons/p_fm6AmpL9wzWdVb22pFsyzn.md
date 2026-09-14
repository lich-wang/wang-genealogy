---
schema: wang-person/v1
id: p_fm6AmpL9wzWdVb22pFsyzn
status: active
merged_into: null
display_name: 王爚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vkkQSwTaoFuUaSKhejG1yK
        subject_person_id: p_fm6AmpL9wzWdVb22pFsyzn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5KP4s6uP7V8D9HDPGTeeVi
          claim_id: c_vkkQSwTaoFuUaSKhejG1yK
          source_id: s_WqviVWuFnDZ46c5koysD9k
          stance: supports
          locator: CBDB:212079
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212079）
          source: &a1
            id: s_WqviVWuFnDZ46c5koysD9k
            source_type: api_record
            title: 中国历代人物传记资料库：王爚（CBDB 212079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212079&o=json
            external_identifier: CBDB:212079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.061Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ykUcT2HJMfoQmjM2WwNKm9
        subject_person_id: p_fm6AmpL9wzWdVb22pFsyzn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爚，明人物。隆慶五年進士，籍贯咸寧，入仕監生。（中国历代人物传记资料库 CBDB 212079）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S599A5waZvCG_7wjpC3txh
          claim_id: c_ykUcT2HJMfoQmjM2WwNKm9
          source_id: s_WqviVWuFnDZ46c5koysD9k
          stance: supports
          locator: CBDB:212079
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i9VBWvGxKzv7Rd9jaIe5Ml
        subject_person_id: p_jknx5y8EMt4htEH5Jaj242
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fm6AmpL9wzWdVb22pFsyzn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6QHpegeQsATSsPtGIKjTgB
          claim_id: c_i9VBWvGxKzv7Rd9jaIe5Ml
          source_id: s_ZJ_ZNjimwfI20YS46i3Si4
          stance: supports
          locator: CBDB：兄弟 王煥（206011）之父／母 王獻箴
          quotation: null
          interpretation_note: 由兄弟关系推断：王爚 与 王煥 为同胞（CBDB 记「兄」），王煥 之父／母即 王爚 之父／母。
          source:
            id: s_ZJ_ZNjimwfI20YS46i3Si4
            source_type: api_record
            title: 中国历代人物传记资料库：王爚（CBDB 212079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212079&o=json
            external_identifier: CBDB:212079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jknx5y8EMt4htEH5Jaj242
        status: active
        display_name: 王獻箴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_QqI4xK4yss0ZqsBSa8hE2K
        subject_person_id: p_1XLNfRiDAQG1jeNLog7rHV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fm6AmpL9wzWdVb22pFsyzn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qzc8O1FfeFxE1vzrUJ4i6i
          claim_id: c_QqI4xK4yss0ZqsBSa8hE2K
          source_id: s_ZJ_ZNjimwfI20YS46i3Si4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206011 王煥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZJ_ZNjimwfI20YS46i3Si4
            source_type: api_record
            title: 中国历代人物传记资料库：王爚（CBDB 212079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212079&o=json
            external_identifier: CBDB:212079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1XLNfRiDAQG1jeNLog7rHV
        status: active
        display_name: 王煥
        merged_into_person_id: null
---

# 王爚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爚 | accepted |
| bio.summary | 王爚，明人物。隆慶五年進士，籍贯咸寧，入仕監生。（中国历代人物传记资料库 CBDB 212079） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jknx5y8EMt4htEH5Jaj242 | 王獻箴 | accepted |
| other | p_1XLNfRiDAQG1jeNLog7rHV | 王煥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王爚（CBDB 212079）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212079&o=json)
