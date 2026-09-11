---
schema: wang-person/v1
id: p_kEX7BaCTJnDcpamj7bx62V
status: active
merged_into: null
display_name: 王申
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NygWbg3uLzNFVufdD1kvDZ
        subject_person_id: p_kEX7BaCTJnDcpamj7bx62V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王申
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dAjamdkePBdtNinRfn2PeG
          claim_id: c_NygWbg3uLzNFVufdD1kvDZ
          source_id: s_atn5EwK9xW4fiPsno6Hdmy
          stance: supports
          locator: CBDB:18662
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（18662）
          source: &a1
            id: s_atn5EwK9xW4fiPsno6Hdmy
            source_type: api_record
            title: 中国历代人物传记资料库：王申（CBDB 18662）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18662&o=json
            external_identifier: CBDB:18662
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.711Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dXsiEAKG8c8pJzw1ksdoTq
        subject_person_id: p_kEX7BaCTJnDcpamj7bx62V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x88Gn5JMDpbVv8Mh3XTWyN
          claim_id: c_dXsiEAKG8c8pJzw1ksdoTq
          source_id: s_atn5EwK9xW4fiPsno6Hdmy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Qma8x4ZbtLL9NItuqTXPZZ
        subject_person_id: p_kEX7BaCTJnDcpamj7bx62V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CK6Y18Q5DxUjTmD2p14zev
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zoxwQl8Z7EXZI3XQ8vA8KT
          claim_id: c_Qma8x4ZbtLL9NItuqTXPZZ
          source_id: s_zBQKrWZxZroHPiVGevWHNK
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1185：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zBQKrWZxZroHPiVGevWHNK
            source_type: api_record
            title: 中国历代人物传记资料库：王億（CBDB 18663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18663&o=json
            external_identifier: CBDB:18663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.713Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CK6Y18Q5DxUjTmD2p14zev
        status: active
        display_name: 王億
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王申

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王申 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CK6Y18Q5DxUjTmD2p14zev | 王億 | accepted |

## 外部来源

- [中国历代人物传记资料库：王申（CBDB 18662）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18662&o=json)
- [中国历代人物传记资料库：王億（CBDB 18663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18663&o=json)
