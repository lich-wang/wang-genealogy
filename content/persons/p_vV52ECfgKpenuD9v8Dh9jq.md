---
schema: wang-person/v1
id: p_vV52ECfgKpenuD9v8Dh9jq
status: active
merged_into: null
display_name: 王施恩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UbYLtYLXE9qw9VkZR5QG8y
        subject_person_id: p_vV52ECfgKpenuD9v8Dh9jq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王施恩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WDG73hjEBz5JPztmEZxuDR
          claim_id: c_UbYLtYLXE9qw9VkZR5QG8y
          source_id: s_9MsjXKxBBi8ZVqS1wjNdbP
          stance: supports
          locator: CBDB:304956
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304956）
          source: &a1
            id: s_9MsjXKxBBi8ZVqS1wjNdbP
            source_type: api_record
            title: 中国历代人物传记资料库：王施恩（CBDB 304956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304956&o=json
            external_identifier: CBDB:304956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.737Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XLsMCpzMAMhBbgWsMMrCdV
        subject_person_id: p_vV52ECfgKpenuD9v8Dh9jq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王施恩，明人物。嘉靖二十年進士，籍贯河南衛。（中国历代人物传记资料库 CBDB 304956）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_39zGTQ5d1kfE5u5FMns6zk
          claim_id: c_XLsMCpzMAMhBbgWsMMrCdV
          source_id: s_9MsjXKxBBi8ZVqS1wjNdbP
          stance: supports
          locator: CBDB:304956
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2I08rqxR642Rg5TtoU6oiI
        subject_person_id: p_vV52ECfgKpenuD9v8Dh9jq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GMiqJBh7YQ1MMn468wZyQK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zLp9SxChFSnCJY7ljwq7YV
          claim_id: c_2I08rqxR642Rg5TtoU6oiI
          source_id: s_9MsjXKxBBi8ZVqS1wjNdbP
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百七十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GMiqJBh7YQ1MMn468wZyQK
        status: active
        display_name: 王曰然
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王施恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王施恩 | accepted |
| bio.summary | 王施恩，明人物。嘉靖二十年進士，籍贯河南衛。（中国历代人物传记资料库 CBDB 304956） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GMiqJBh7YQ1MMn468wZyQK | 王曰然 | accepted |

## 外部来源

- [中国历代人物传记资料库：王施恩（CBDB 304956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304956&o=json)
