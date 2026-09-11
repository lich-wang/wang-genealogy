---
schema: wang-person/v1
id: p_4Ai3Lc3usLSFSc2M7LyN9V
status: active
merged_into: null
display_name: 王淪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YEvLDXMPpnhopWvEfaQr7d
        subject_person_id: p_4Ai3Lc3usLSFSc2M7LyN9V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qnBk1RHX9DF5C7E4GnFXds
          claim_id: c_YEvLDXMPpnhopWvEfaQr7d
          source_id: s_PrN3NWq3XMymvbz5tdnrr4
          stance: supports
          locator: CBDB:551410
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551410）
          source: &a1
            id: s_PrN3NWq3XMymvbz5tdnrr4
            source_type: api_record
            title: 中国历代人物传记资料库：王淪（CBDB 551410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551410&o=json
            external_identifier: CBDB:551410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.595Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u6SYNyovT5PG37anvRHFSi
        subject_person_id: p_4Ai3Lc3usLSFSc2M7LyN9V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淪，明人物。籍贯太康，入仕進士，曾任戶部右侍郎。（中国历代人物传记资料库 CBDB 551410）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WVFJGf12WJdfk-KoU5wr1a
          claim_id: c_u6SYNyovT5PG37anvRHFSi
          source_id: s_PrN3NWq3XMymvbz5tdnrr4
          stance: supports
          locator: CBDB:551410
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_X_CUHZASFvL87m49laZ0G_
        subject_person_id: p_CCJTNZbzEa44djTDr5H795
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4Ai3Lc3usLSFSc2M7LyN9V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l0YrUWZ7p5u72SlRunPXaK
          claim_id: c_X_CUHZASFvL87m49laZ0G_
          source_id: s_PrN3NWq3XMymvbz5tdnrr4
          stance: supports
          locator: 河南通志:八十卷，lgid=761415：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CCJTNZbzEa44djTDr5H795
        status: active
        display_name: 王鈍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王淪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淪 | accepted |
| bio.summary | 王淪，明人物。籍贯太康，入仕進士，曾任戶部右侍郎。（中国历代人物传记资料库 CBDB 551410） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CCJTNZbzEa44djTDr5H795 | 王鈍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淪（CBDB 551410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551410&o=json)
