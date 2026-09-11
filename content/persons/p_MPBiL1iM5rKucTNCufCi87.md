---
schema: wang-person/v1
id: p_MPBiL1iM5rKucTNCufCi87
status: active
merged_into: null
display_name: 王容
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8nJbgyeHjw766MjQtFSULD
        subject_person_id: p_MPBiL1iM5rKucTNCufCi87
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王容
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1gnQ92anQCnmKFQqcfuwVW
          claim_id: c_8nJbgyeHjw766MjQtFSULD
          source_id: s_56mZGn5YWySJqR5SA2vDLi
          stance: supports
          locator: CBDB:245703
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245703）
          source: &a1
            id: s_56mZGn5YWySJqR5SA2vDLi
            source_type: api_record
            title: 中国历代人物传记资料库：王容（CBDB 245703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245703&o=json
            external_identifier: CBDB:245703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.073Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KS5oCELPJBwLo25n9qZUHu
        subject_person_id: p_MPBiL1iM5rKucTNCufCi87
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王容，明人物。成化八年進士，籍贯文登。（中国历代人物传记资料库 CBDB 245703）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WWrfUe5ctX99UxWSvjZUqJ
          claim_id: c_KS5oCELPJBwLo25n9qZUHu
          source_id: s_56mZGn5YWySJqR5SA2vDLi
          stance: supports
          locator: CBDB:245703
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

# 王容

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王容 | accepted |
| bio.summary | 王容，明人物。成化八年進士，籍贯文登。（中国历代人物传记资料库 CBDB 245703） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王容（CBDB 245703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245703&o=json)
