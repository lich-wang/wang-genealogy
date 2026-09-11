---
schema: wang-person/v1
id: p_KEEcj6VFTXfbtMHM3ZP9QW
status: active
merged_into: null
display_name: 王仕得
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WeYXVEAPhJ9eNjCy9ukdnt
        subject_person_id: p_KEEcj6VFTXfbtMHM3ZP9QW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕得
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BxDxbY6JZdfkN4JxX5Nq8Q
          claim_id: c_WeYXVEAPhJ9eNjCy9ukdnt
          source_id: s_SCWt4tLBPKegE9SwQJRDHz
          stance: supports
          locator: CBDB:690824
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690824）
          source: &a1
            id: s_SCWt4tLBPKegE9SwQJRDHz
            source_type: api_record
            title: 中国历代人物传记资料库：王仕得（CBDB 690824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690824&o=json
            external_identifier: CBDB:690824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WQ1r1cJmLnXC7Lf7FoQrAB
        subject_person_id: p_KEEcj6VFTXfbtMHM3ZP9QW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕得，明人物。籍贯黟縣，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任刑部貴州司主事、承德郎。（中国历代人物传记资料库 CBDB 690824）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uM5haMEuYdCCykBWtsBKo2
          claim_id: c_WQ1r1cJmLnXC7Lf7FoQrAB
          source_id: s_SCWt4tLBPKegE9SwQJRDHz
          stance: supports
          locator: CBDB:690824
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

# 王仕得

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仕得 | accepted |
| bio.summary | 王仕得，明人物。籍贯黟縣，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任刑部貴州司主事、承德郎。（中国历代人物传记资料库 CBDB 690824） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仕得（CBDB 690824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690824&o=json)
