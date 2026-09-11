---
schema: wang-person/v1
id: p_X3cbVMPDHiFztvjqhhDJNF
status: active
merged_into: null
display_name: 王道湘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tvqHrxuENGvUJ5WihB2v4Q
        subject_person_id: p_X3cbVMPDHiFztvjqhhDJNF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道湘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Yp99pQFZY2AeJxigH49Lod
          claim_id: c_tvqHrxuENGvUJ5WihB2v4Q
          source_id: s_9yEroGD7FjEQtQc4HmMfdu
          stance: supports
          locator: CBDB:640456
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640456）
          source: &a1
            id: s_9yEroGD7FjEQtQc4HmMfdu
            source_type: api_record
            title: 中国历代人物传记资料库：王道湘（CBDB 640456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640456&o=json
            external_identifier: CBDB:640456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.266Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ML4dqB7UmE7248gHMUahxc
        subject_person_id: p_X3cbVMPDHiFztvjqhhDJNF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道湘，清人物。籍贯黃陂，入仕縣學附生，曾任知州。（中国历代人物传记资料库 CBDB 640456）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nQDiRlrahQW6ByHlHHWD5a
          claim_id: c_ML4dqB7UmE7248gHMUahxc
          source_id: s_9yEroGD7FjEQtQc4HmMfdu
          stance: supports
          locator: CBDB:640456
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王道湘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道湘 | accepted |
| bio.summary | 王道湘，清人物。籍贯黃陂，入仕縣學附生，曾任知州。（中国历代人物传记资料库 CBDB 640456） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道湘（CBDB 640456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640456&o=json)
