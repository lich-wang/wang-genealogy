---
schema: wang-person/v1
id: p_j7EGD83KpjsC5XjBJ8MvhJ
status: active
merged_into: null
display_name: 王㦸
cbdb_id: 512832
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NmSztHBXcf35FYctr6k3PW
        subject_person_id: p_j7EGD83KpjsC5XjBJ8MvhJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㦸，明人物。籍贯綏德州，入仕世襲(替)，曾任百戶、都指揮僉事、副千戶。（中国历代人物传记资料库 CBDB 512832）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_63ig1ROHxTTT_y5HH3PaPi
          claim_id: c_NmSztHBXcf35FYctr6k3PW
          source_id: s_NjN8ky51HGBVMtyZjv8sRd
          stance: supports
          locator: CBDB:512832
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NjN8ky51HGBVMtyZjv8sRd
            source_type: api_record
            title: 中国历代人物传记资料库：王㦸（CBDB 512832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512832&o=json
            external_identifier: CBDB:512832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qr6cM8qycG19wL4MsPCS37
        subject_person_id: p_j7EGD83KpjsC5XjBJ8MvhJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㦸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jZyRHM77EyY6j8pEcUB5PS
          claim_id: c_qr6cM8qycG19wL4MsPCS37
          source_id: s_NjN8ky51HGBVMtyZjv8sRd
          stance: supports
          locator: CBDB:512832
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6801-6900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fSD1jKmThQG7WhY25n2R9R
        subject_person_id: p_j7EGD83KpjsC5XjBJ8MvhJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3oo84iwNMEPLP3ehQgCzRG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_158oKWxgQpvlLxGcaWCRnX
          claim_id: c_fSD1jKmThQG7WhY25n2R9R
          source_id: s_jABdB1qDwLJzVvBDB7r8Wa
          stance: supports
          locator: 榆林府志，lgid=1046721：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jABdB1qDwLJzVvBDB7r8Wa
            source_type: api_record
            title: 中国历代人物传记资料库：王效（CBDB 512835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512835&o=json
            external_identifier: CBDB:512835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3oo84iwNMEPLP3ehQgCzRG
        status: active
        display_name: 王效
        merged_into_person_id: null
    - claim:
        id: c_-IVEClnCufcCzPqWySiZcn
        subject_person_id: p_j7EGD83KpjsC5XjBJ8MvhJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MkRdJ9sF1YqyAAR6WiK4RF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2TPUF24iQx9zATKLfQnCdR
          claim_id: c_-IVEClnCufcCzPqWySiZcn
          source_id: s_76yWFpAXABZp6xc9a2Jy4W
          stance: supports
          locator: 榆林府志，lgid=1046721：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_76yWFpAXABZp6xc9a2Jy4W
            source_type: api_record
            title: 中国历代人物传记资料库：王勛（CBDB 512834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512834&o=json
            external_identifier: CBDB:512834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MkRdJ9sF1YqyAAR6WiK4RF
        status: active
        display_name: 王勛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王㦸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王㦸，明人物。籍贯綏德州，入仕世襲(替)，曾任百戶、都指揮僉事、副千戶。（中国历代人物传记资料库 CBDB 512832） | accepted |
| name.primary | 王㦸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3oo84iwNMEPLP3ehQgCzRG | 王效 | accepted |
| children | p_MkRdJ9sF1YqyAAR6WiK4RF | 王勛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王效（CBDB 512835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512835&o=json)
- [中国历代人物传记资料库：王勛（CBDB 512834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512834&o=json)
- [中国历代人物传记资料库：王㦸（CBDB 512832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512832&o=json)
