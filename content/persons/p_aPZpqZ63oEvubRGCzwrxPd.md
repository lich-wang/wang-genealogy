---
schema: wang-person/v1
id: p_aPZpqZ63oEvubRGCzwrxPd
status: active
merged_into: null
display_name: 王天錫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c4MDfkkeMZsX2565Kq97Hi
        subject_person_id: p_aPZpqZ63oEvubRGCzwrxPd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Dew8SSSED7KJD8rFbr9S6N
          claim_id: c_c4MDfkkeMZsX2565Kq97Hi
          source_id: s_aDkZFt4SFnzhc5opkVfQbe
          stance: supports
          locator: CBDB:694736
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694736）
          source: &a1
            id: s_aDkZFt4SFnzhc5opkVfQbe
            source_type: api_record
            title: 中国历代人物传记资料库：王天錫（CBDB 694736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694736&o=json
            external_identifier: CBDB:694736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sjQ8HxjBSMuE6kEdw69Tuu
        subject_person_id: p_aPZpqZ63oEvubRGCzwrxPd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天錫，清人物。籍贯黟縣。（中国历代人物传记资料库 CBDB 694736）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QvdUvKe5QnnfglSzunPpxh
          claim_id: c_sjQ8HxjBSMuE6kEdw69Tuu
          source_id: s_aDkZFt4SFnzhc5opkVfQbe
          stance: supports
          locator: CBDB:694736
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6idZdSi6EnIYgMYdyxZXPa
        subject_person_id: p_aPZpqZ63oEvubRGCzwrxPd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r7hhg2XRadZp92oFyJn4wZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GDIJh93COEL8aaD9DFlig9
          claim_id: c_6idZdSi6EnIYgMYdyxZXPa
          source_id: s_vYvqQMRz1S3BAmseDvsKLS
          stance: supports
          locator: "(民國)黟縣四志: 十六卷卷首一卷卷末一卷，lgid=1167294：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vYvqQMRz1S3BAmseDvsKLS
            source_type: api_record
            title: 中国历代人物传记资料库：王轉男（CBDB 694735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694735&o=json
            external_identifier: CBDB:694735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.527Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_r7hhg2XRadZp92oFyJn4wZ
        status: active
        display_name: 王轉男
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王天錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天錫 | accepted |
| bio.summary | 王天錫，清人物。籍贯黟縣。（中国历代人物传记资料库 CBDB 694736） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_r7hhg2XRadZp92oFyJn4wZ | 王轉男 | accepted |

## 外部来源

- [中国历代人物传记资料库：王天錫（CBDB 694736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694736&o=json)
- [中国历代人物传记资料库：王轉男（CBDB 694735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694735&o=json)
