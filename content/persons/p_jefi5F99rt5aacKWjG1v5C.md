---
schema: wang-person/v1
id: p_jefi5F99rt5aacKWjG1v5C
status: active
merged_into: null
display_name: 王朝翼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fXSQtfeWf4VQq9ZnCe8aDs
        subject_person_id: p_jefi5F99rt5aacKWjG1v5C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝翼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GeGLwhr9cU1wrDUdw8HdLt
          claim_id: c_fXSQtfeWf4VQq9ZnCe8aDs
          source_id: s_JNLM4WypYXahjE1YLhGozo
          stance: supports
          locator: CBDB:638637
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638637）
          source: &a1
            id: s_JNLM4WypYXahjE1YLhGozo
            source_type: api_record
            title: 中国历代人物传记资料库：王朝翼（CBDB 638637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638637&o=json
            external_identifier: CBDB:638637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wewEH5bPxPPJAtdfqHHP7H
        subject_person_id: p_jefi5F99rt5aacKWjG1v5C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝翼，清人物。籍贯寶坻，入仕監生，曾任知府、知縣。（中国历代人物传记资料库 CBDB 638637）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qJ9Bi8lAxmI9xxWaktRltk
          claim_id: c_wewEH5bPxPPJAtdfqHHP7H
          source_id: s_JNLM4WypYXahjE1YLhGozo
          stance: supports
          locator: CBDB:638637
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

# 王朝翼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝翼 | accepted |
| bio.summary | 王朝翼，清人物。籍贯寶坻，入仕監生，曾任知府、知縣。（中国历代人物传记资料库 CBDB 638637） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝翼（CBDB 638637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638637&o=json)
