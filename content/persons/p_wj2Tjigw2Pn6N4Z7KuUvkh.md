---
schema: wang-person/v1
id: p_wj2Tjigw2Pn6N4Z7KuUvkh
status: active
merged_into: null
display_name: 王處存
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MnqbFSkU6YyJ23iqG1wPJv
        subject_person_id: p_wj2Tjigw2Pn6N4Z7KuUvkh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處存
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dmtaCz5hMiQ7diioA5PKV7
          claim_id: c_MnqbFSkU6YyJ23iqG1wPJv
          source_id: s_nSTyC7ijD12rrG7CQB1eA6
          stance: supports
          locator: CBDB:169693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169693）
          source: &a1
            id: s_nSTyC7ijD12rrG7CQB1eA6
            source_type: api_record
            title: 中国历代人物传记资料库：王處存（CBDB 169693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169693&o=json
            external_identifier: CBDB:169693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.021Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qEx5BJd69MZYbycY5DhdFp
        subject_person_id: p_wj2Tjigw2Pn6N4Z7KuUvkh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 830年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yEGFdQVjbu3aAvLZRXnNpz
          claim_id: c_qEx5BJd69MZYbycY5DhdFp
          source_id: s_nSTyC7ijD12rrG7CQB1eA6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Vp4CKjuK5v4MPRW1Gy8KiK
        subject_person_id: p_wj2Tjigw2Pn6N4Z7KuUvkh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 895年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iQMVir1cMUNogBi1oHWuCi
          claim_id: c_Vp4CKjuK5v4MPRW1Gy8KiK
          source_id: s_nSTyC7ijD12rrG7CQB1eA6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N4DDYV6GyGQQWPAzAPn6R5
        subject_person_id: p_wj2Tjigw2Pn6N4Z7KuUvkh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KgE5hzQ8vxWePeTnfqrNKT
          claim_id: c_N4DDYV6GyGQQWPAzAPn6R5
          source_id: s_nSTyC7ijD12rrG7CQB1eA6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_yMY4V2Dg6qSJ1FNsyylMHp
        subject_person_id: p_wj2Tjigw2Pn6N4Z7KuUvkh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ca44NDxeepHheYRG3qRvfq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HLc_NcAcKq-uamNEoFLz3P
          claim_id: c_yMY4V2Dg6qSJ1FNsyylMHp
          source_id: s_3yAEtS5j9aSqNqN5xYppZ5
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3yAEtS5j9aSqNqN5xYppZ5
            source_type: api_record
            title: 中国历代人物传记资料库：王郜（CBDB 186844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186844&o=json
            external_identifier: CBDB:186844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ca44NDxeepHheYRG3qRvfq
        status: active
        display_name: 王郜
        merged_into_person_id: null
    - claim:
        id: c_1IVNla1B9cu4TvbgE2j5Wg
        subject_person_id: p_wj2Tjigw2Pn6N4Z7KuUvkh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p6RTY29514vD6isBsxvXYV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V_Ognn7Utj5GBxevQUlAH2
          claim_id: c_1IVNla1B9cu4TvbgE2j5Wg
          source_id: s_n6FSqGToKu72xXFwsrjMiz
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n6FSqGToKu72xXFwsrjMiz
            source_type: api_record
            title: 中国历代人物传记资料库：王鄴（CBDB 169146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169146&o=json
            external_identifier: CBDB:169146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.229Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_p6RTY29514vD6isBsxvXYV
        status: active
        display_name: 王鄴
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王處存

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王處存 | accepted |
| birth.date | 830年 | accepted |
| death.date | 895年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ca44NDxeepHheYRG3qRvfq | 王郜 | accepted |
| children | p_p6RTY29514vD6isBsxvXYV | 王鄴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王處存（CBDB 169693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169693&o=json)
- [中国历代人物传记资料库：王郜（CBDB 186844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186844&o=json)
- [中国历代人物传记资料库：王鄴（CBDB 169146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169146&o=json)
