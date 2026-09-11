---
schema: wang-person/v1
id: p_ehZuBZd9shSeUtjtamrVMy
status: active
merged_into: null
display_name: 王理
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VEe66H1npEUqkKaeWNqTGy
        subject_person_id: p_ehZuBZd9shSeUtjtamrVMy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2A5f3VN8NWphjosPa6HCwB
          claim_id: c_VEe66H1npEUqkKaeWNqTGy
          source_id: s_ZB42MbQK62RxYX5dJTy2ox
          stance: supports
          locator: CBDB:261819
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261819）
          source: &a1
            id: s_ZB42MbQK62RxYX5dJTy2ox
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 261819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261819&o=json
            external_identifier: CBDB:261819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.557Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VkCtCNFChsKo7L1n8QXKAU
        subject_person_id: p_ehZuBZd9shSeUtjtamrVMy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理，明人物。弘治三年進士，籍贯山陰，曾任知縣。（中国历代人物传记资料库 CBDB 261819）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O8jUxse1vp8V5wmBntUhfE
          claim_id: c_VkCtCNFChsKo7L1n8QXKAU
          source_id: s_ZB42MbQK62RxYX5dJTy2ox
          stance: supports
          locator: CBDB:261819
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_kmEseU-DTPkVDIiIe9AUHW
        subject_person_id: p_ehZuBZd9shSeUtjtamrVMy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_38MrYsNYkPoBeMisQP7Sof
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PbYb2PwQwrjchvelRvu06X
          claim_id: c_kmEseU-DTPkVDIiIe9AUHW
          source_id: s_ZB42MbQK62RxYX5dJTy2ox
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_38MrYsNYkPoBeMisQP7Sof
        status: active
        display_name: 王经
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王理

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王理 | accepted |
| bio.summary | 王理，明人物。弘治三年進士，籍贯山陰，曾任知縣。（中国历代人物传记资料库 CBDB 261819） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_38MrYsNYkPoBeMisQP7Sof | 王经 | accepted |

## 外部来源

- [中国历代人物传记资料库：王理（CBDB 261819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261819&o=json)
