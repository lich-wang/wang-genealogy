---
schema: wang-person/v1
id: p_PyCARHXHLVhag5zXGNfdsP
status: active
merged_into: null
display_name: 王弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3pE8C6tLtGHkQrtNBj58jN
        subject_person_id: p_PyCARHXHLVhag5zXGNfdsP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_keiQ9qmkVgFTE8yXpZoxM9
          claim_id: c_3pE8C6tLtGHkQrtNBj58jN
          source_id: s_PmjbvnHj24HTdy1USVxRVj
          stance: supports
          locator: CBDB:222289
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222289）
          source: &a1
            id: s_PmjbvnHj24HTdy1USVxRVj
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 222289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222289&o=json
            external_identifier: CBDB:222289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WN41ZXq6nyZEqmMvwb6sZA
        subject_person_id: p_PyCARHXHLVhag5zXGNfdsP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼，明人物。萬曆十一年進士，籍贯鄞縣。（中国历代人物传记资料库 CBDB 222289）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u41Cvn7BS3IqJ17TIp2omI
          claim_id: c_WN41ZXq6nyZEqmMvwb6sZA
          source_id: s_PmjbvnHj24HTdy1USVxRVj
          stance: supports
          locator: CBDB:222289
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

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼 | accepted |
| bio.summary | 王弼，明人物。萬曆十一年進士，籍贯鄞縣。（中国历代人物传记资料库 CBDB 222289） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 222289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222289&o=json)
