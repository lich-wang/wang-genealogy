---
schema: wang-person/v1
id: p_A8FZFEXtNi6H1X64Qcc96n
status: active
merged_into: null
display_name: 王尚賢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qGK2UQw3xKcmjRwPPqGNrp
        subject_person_id: p_A8FZFEXtNi6H1X64Qcc96n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F7Mx6ZBdpJExBoRNTH5wgV
          claim_id: c_qGK2UQw3xKcmjRwPPqGNrp
          source_id: s_nZqR7qfJq7j7dY2H5Qw6y1
          stance: supports
          locator: CBDB:152390
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（152390）
          source: &a1
            id: s_nZqR7qfJq7j7dY2H5Qw6y1
            source_type: api_record
            title: 中国历代人物传记资料库：王尚賢（CBDB 152390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152390&o=json
            external_identifier: CBDB:152390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.847Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HEYw9ytLmXiAo4qfd7F2M5
        subject_person_id: p_A8FZFEXtNi6H1X64Qcc96n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚賢，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 152390）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PUn77vYlDKYAlznFQ-pNW4
          claim_id: c_HEYw9ytLmXiAo4qfd7F2M5
          source_id: s_nZqR7qfJq7j7dY2H5Qw6y1
          stance: supports
          locator: CBDB:152390
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_in7hH5dKZY8oHo4XXEAdQ6
        subject_person_id: p_TwqNttrAJWC7sH4DG9Kbi9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A8FZFEXtNi6H1X64Qcc96n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YBmTHhGYF5ULSnggVU8Uc6
          claim_id: c_in7hH5dKZY8oHo4XXEAdQ6
          source_id: s_nZqR7qfJq7j7dY2H5Qw6y1
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 339：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TwqNttrAJWC7sH4DG9Kbi9
        status: active
        display_name: 王令
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王尚賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚賢 | accepted |
| bio.summary | 王尚賢，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 152390） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TwqNttrAJWC7sH4DG9Kbi9 | 王令 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚賢（CBDB 152390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152390&o=json)
