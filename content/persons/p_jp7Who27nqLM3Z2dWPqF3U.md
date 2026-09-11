---
schema: wang-person/v1
id: p_jp7Who27nqLM3Z2dWPqF3U
status: active
merged_into: null
display_name: 王銓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9Gu33iBaVtXyUHccuiRP4H
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rWSGJpvCHJGFFmvJBrTnLm
          claim_id: c_9Gu33iBaVtXyUHccuiRP4H
          source_id: s_HdtR9Y586aJ6gpfNHRKxPc
          stance: supports
          locator: CBDB:314222
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314222）
          source: &a1
            id: s_HdtR9Y586aJ6gpfNHRKxPc
            source_type: api_record
            title: 中国历代人物传记资料库：王銓（CBDB 314222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314222&o=json
            external_identifier: CBDB:314222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cwmHkZfStFPnxhUTMBRwNp
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓，明人物。嘉靖二十九年進士，籍贯金華，曾任提刑按察使司僉事。（中国历代人物传记资料库 CBDB 314222）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fDV-KC0-MNXdZW0EX_tusd
          claim_id: c_cwmHkZfStFPnxhUTMBRwNp
          source_id: s_HdtR9Y586aJ6gpfNHRKxPc
          stance: supports
          locator: CBDB:314222
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_WjuLA8-3X31ysCkjfTHGj7
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oPmElOUPUB6Wxll5TfQlkO
          claim_id: c_WjuLA8-3X31ysCkjfTHGj7
          source_id: s_HdtR9Y586aJ6gpfNHRKxPc
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百五十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        status: active
        display_name: 王汝述
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王銓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銓 | accepted |
| bio.summary | 王銓，明人物。嘉靖二十九年進士，籍贯金華，曾任提刑按察使司僉事。（中国历代人物传记资料库 CBDB 314222） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_FJ5VCJ2dfQ9YvKZT3bmX4c | 王汝述 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銓（CBDB 314222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314222&o=json)
