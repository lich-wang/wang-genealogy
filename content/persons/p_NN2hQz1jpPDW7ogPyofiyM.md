---
schema: wang-person/v1
id: p_NN2hQz1jpPDW7ogPyofiyM
status: active
merged_into: null
display_name: 王一科
cbdb_id: 213984
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EukkibfjZKCPff6BajKuAu
        subject_person_id: p_NN2hQz1jpPDW7ogPyofiyM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一科，明人物。萬曆二年進士，籍贯南城。（中国历代人物传记资料库 CBDB 213984）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_2gdhe7orqiioPii0lZHEZi
          claim_id: c_EukkibfjZKCPff6BajKuAu
          source_id: s_Fn4gRxtyRKS6zxu1zMxN8j
          stance: supports
          locator: CBDB:213984
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Fn4gRxtyRKS6zxu1zMxN8j
            source_type: api_record
            title: 中国历代人物传记资料库：王一科（CBDB 213984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213984&o=json
            external_identifier: CBDB:213984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KbFaqGh5myACXmEmbbh4A6
        subject_person_id: p_NN2hQz1jpPDW7ogPyofiyM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一科
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YF2ogZtwuj41Wd5C2h5EE9
          claim_id: c_KbFaqGh5myACXmEmbbh4A6
          source_id: s_Fn4gRxtyRKS6zxu1zMxN8j
          stance: supports
          locator: CBDB:213984
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王一科

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一科，明人物。萬曆二年進士，籍贯南城。（中国历代人物传记资料库 CBDB 213984） | accepted |
| name.primary | 王一科 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一科（CBDB 213984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213984&o=json)
