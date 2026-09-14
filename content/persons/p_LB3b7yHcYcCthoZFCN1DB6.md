---
schema: wang-person/v1
id: p_LB3b7yHcYcCthoZFCN1DB6
status: active
merged_into: null
display_name: 王藻
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LFtWomTW4uLUJ1TMHKBKyt
        subject_person_id: p_LB3b7yHcYcCthoZFCN1DB6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BFd5d8VvPYn6Pe3fHSsuPd
          claim_id: c_LFtWomTW4uLUJ1TMHKBKyt
          source_id: s_d2c7xQW865y3xWDasqqWCV
          stance: supports
          locator: CBDB:210431
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210431）
          source: &a1
            id: s_d2c7xQW865y3xWDasqqWCV
            source_type: api_record
            title: 中国历代人物传记资料库：王藻（CBDB 210431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210431&o=json
            external_identifier: CBDB:210431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kJ9cEciKjz8oHJFQqTvCoc
        subject_person_id: p_LB3b7yHcYcCthoZFCN1DB6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藻，明人物。隆慶五年進士，籍贯清源，曾任推官。（中国历代人物传记资料库 CBDB 210431）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2KXr15eGoMXxQZ12uCbmII
          claim_id: c_kJ9cEciKjz8oHJFQqTvCoc
          source_id: s_d2c7xQW865y3xWDasqqWCV
          stance: supports
          locator: CBDB:210431
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bhmvOvnorX2eHX-6QmPbfN
        subject_person_id: p_cJPjdNwsR6729BhxkY9bu9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LB3b7yHcYcCthoZFCN1DB6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wMAPiTF-sje2O9SvrbB2sh
          claim_id: c_bhmvOvnorX2eHX-6QmPbfN
          source_id: s_zvqkL-OhLF_hH3xDxtHYS4
          stance: supports
          locator: CBDB：兄弟 王蔚（205903）之父／母 王撫民
          quotation: null
          interpretation_note: 由兄弟关系推断：王藻 与 王蔚 为同胞（CBDB 记「兄」），王蔚 之父／母即 王藻 之父／母。
          source:
            id: s_zvqkL-OhLF_hH3xDxtHYS4
            source_type: api_record
            title: 中国历代人物传记资料库：王藻（CBDB 210431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210431&o=json
            external_identifier: CBDB:210431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cJPjdNwsR6729BhxkY9bu9
        status: active
        display_name: 王撫民
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_AkQwijbZE6WurOGzhZOPJ_
        subject_person_id: p_LB3b7yHcYcCthoZFCN1DB6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_k3fw4jn7UF1hujd81L3vBe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_24IxX3JZ2QUocTp3O143bs
          claim_id: c_AkQwijbZE6WurOGzhZOPJ_
          source_id: s_zvqkL-OhLF_hH3xDxtHYS4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205903 王蔚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zvqkL-OhLF_hH3xDxtHYS4
            source_type: api_record
            title: 中国历代人物传记资料库：王藻（CBDB 210431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210431&o=json
            external_identifier: CBDB:210431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_k3fw4jn7UF1hujd81L3vBe
        status: active
        display_name: 王蔚
        merged_into_person_id: null
---

# 王藻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藻 | accepted |
| bio.summary | 王藻，明人物。隆慶五年進士，籍贯清源，曾任推官。（中国历代人物传记资料库 CBDB 210431） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cJPjdNwsR6729BhxkY9bu9 | 王撫民 | accepted |
| other | p_k3fw4jn7UF1hujd81L3vBe | 王蔚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王藻（CBDB 210431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210431&o=json)
