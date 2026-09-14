---
schema: wang-person/v1
id: p_Kebu9paBMzhwM6J5F5Feut
status: active
merged_into: null
display_name: 王九峰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BH2Db6JWBqUQ3EfQs3opQ6
        subject_person_id: p_Kebu9paBMzhwM6J5F5Feut
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九峰
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cLNHDPVHFfWQAGg9FgziCd
          claim_id: c_BH2Db6JWBqUQ3EfQs3opQ6
          source_id: s_c7mUForCVG1hqo3LZL6fs8
          stance: supports
          locator: CBDB:268144
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（268144）
          source: &a1
            id: s_c7mUForCVG1hqo3LZL6fs8
            source_type: api_record
            title: 中国历代人物传记资料库：王九峰（CBDB 268144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268144&o=json
            external_identifier: CBDB:268144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HBF18tyjYRJ89BdUm3Ruo9
        subject_person_id: p_Kebu9paBMzhwM6J5F5Feut
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九峰，明人物。弘治九年進士，籍贯鄠縣。（中国历代人物传记资料库 CBDB 268144）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ojqMNNlHt78BahroyU3dSc
          claim_id: c_HBF18tyjYRJ89BdUm3Ruo9
          source_id: s_c7mUForCVG1hqo3LZL6fs8
          stance: supports
          locator: CBDB:268144
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ce3oxoYSZAmZeFKCrhBrl0
        subject_person_id: p_AHxos763CxLVJAAUFYkhkc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Kebu9paBMzhwM6J5F5Feut
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p5ACJnhIwe2JOywVaaplNA
          claim_id: c_Ce3oxoYSZAmZeFKCrhBrl0
          source_id: s_Ikwh3lF9uzBL6xv774zb7w
          stance: supports
          locator: CBDB：兄弟 王九思（126440）之父／母 王儒
          quotation: null
          interpretation_note: 由兄弟关系推断：王九峰 与 王九思 为同胞（CBDB 记「兄」），王九思 之父／母即 王九峰 之父／母。
          source:
            id: s_Ikwh3lF9uzBL6xv774zb7w
            source_type: api_record
            title: 中国历代人物传记资料库：王九峰（CBDB 268144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268144&o=json
            external_identifier: CBDB:268144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AHxos763CxLVJAAUFYkhkc
        status: active
        display_name: 王儒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_eTu9RR5P50PV3QyuZ5DPhS
        subject_person_id: p_BDk6YNhR5VP5UAnHiZAmaN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Kebu9paBMzhwM6J5F5Feut
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jNbkhXUFJV5Y7358TqJC4S
          claim_id: c_eTu9RR5P50PV3QyuZ5DPhS
          source_id: s_Ikwh3lF9uzBL6xv774zb7w
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126440 王九思）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ikwh3lF9uzBL6xv774zb7w
            source_type: api_record
            title: 中国历代人物传记资料库：王九峰（CBDB 268144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268144&o=json
            external_identifier: CBDB:268144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BDk6YNhR5VP5UAnHiZAmaN
        status: active
        display_name: 王九思
        merged_into_person_id: null
---

# 王九峰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九峰 | accepted |
| bio.summary | 王九峰，明人物。弘治九年進士，籍贯鄠縣。（中国历代人物传记资料库 CBDB 268144） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AHxos763CxLVJAAUFYkhkc | 王儒 | accepted |
| other | p_BDk6YNhR5VP5UAnHiZAmaN | 王九思 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九峰（CBDB 268144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268144&o=json)
