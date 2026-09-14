---
schema: wang-person/v1
id: p_VAeNtqM8ukkfLvnyiw11uS
status: active
merged_into: null
display_name: 王成
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_spMyprD3ozPeTijkFa6GBn
        subject_person_id: p_VAeNtqM8ukkfLvnyiw11uS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QJokXW9BkkfNKwAJ6xMQMF
          claim_id: c_spMyprD3ozPeTijkFa6GBn
          source_id: s_UjNF9JkQci4CZ4bYvZAQ7q
          stance: supports
          locator: CBDB:249582
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249582）
          source: &a1
            id: s_UjNF9JkQci4CZ4bYvZAQ7q
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 249582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249582&o=json
            external_identifier: CBDB:249582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.179Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dP7GhC2jKY9rMy5W8sGfg8
        subject_person_id: p_VAeNtqM8ukkfLvnyiw11uS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成，明人物。成化十一年進士，籍贯棗陽。（中国历代人物传记资料库 CBDB 249582）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Pdks-gmzuTqzmnO6wu2Dca
          claim_id: c_dP7GhC2jKY9rMy5W8sGfg8
          source_id: s_UjNF9JkQci4CZ4bYvZAQ7q
          stance: supports
          locator: CBDB:249582
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_VVSvHXfXKLOTzfqC2P-1-G
        subject_person_id: p_VAeNtqM8ukkfLvnyiw11uS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jAmChPEVMec3gdCzVZvmN7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JAfSBVL03lfDBSg3UKZD6E
          claim_id: c_VVSvHXfXKLOTzfqC2P-1-G
          source_id: s_UjNF9JkQci4CZ4bYvZAQ7q
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第九十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jAmChPEVMec3gdCzVZvmN7
        status: active
        display_name: 王琰
        merged_into_person_id: null
    - claim:
        id: c_b1mCUfhe2oscR7eM3iASi2
        subject_person_id: p_VAeNtqM8ukkfLvnyiw11uS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sa538DDzyvE8rR9fg6QYUN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x1ORm8bVScTkrhmkFveejh
          claim_id: c_b1mCUfhe2oscR7eM3iASi2
          source_id: s_dWwCcE_DmaBbeq7SmWDUSv
          stance: supports
          locator: CBDB：兄弟 王琰（199781）之父／母 王成
          quotation: null
          interpretation_note: 由兄弟关系推断：王玘 与 王琰 为同胞（CBDB 记「弟」），王琰 之父／母即 王玘 之父／母。
          source:
            id: s_dWwCcE_DmaBbeq7SmWDUSv
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 249585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249585&o=json
            external_identifier: CBDB:249585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sa538DDzyvE8rR9fg6QYUN
        status: active
        display_name: 王玘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成 | accepted |
| bio.summary | 王成，明人物。成化十一年進士，籍贯棗陽。（中国历代人物传记资料库 CBDB 249582） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_jAmChPEVMec3gdCzVZvmN7 | 王琰 | accepted |
| children | p_sa538DDzyvE8rR9fg6QYUN | 王玘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 249582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249582&o=json)
- [中国历代人物传记资料库：王玘（CBDB 249585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249585&o=json)
