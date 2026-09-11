---
schema: wang-person/v1
id: p_H4W2Q8y4hDuLu6zz75hDFe
status: active
merged_into: null
display_name: 王達
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7im59FRwH8haRpJLcKbB7h
        subject_person_id: p_H4W2Q8y4hDuLu6zz75hDFe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_26fcYC3c9hEcGvAKgnc5oJ
          claim_id: c_7im59FRwH8haRpJLcKbB7h
          source_id: s_Fio1dE7ox3VD3Uy3mNJJVu
          stance: supports
          locator: CBDB:139433
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139433）
          source: &a1
            id: s_Fio1dE7ox3VD3Uy3mNJJVu
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 139433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139433&o=json
            external_identifier: CBDB:139433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.411Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WtfoS38UCsWUGa2FoMysSX
        subject_person_id: p_H4W2Q8y4hDuLu6zz75hDFe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 606年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tN5FwB2FA55qruodvufZ6e
          claim_id: c_WtfoS38UCsWUGa2FoMysSX
          source_id: s_Fio1dE7ox3VD3Uy3mNJJVu
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
        id: c_3VruHxqb4MaoJnLBVENLYh
        subject_person_id: p_H4W2Q8y4hDuLu6zz75hDFe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 664年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MoBMmARBrGjEZ4TTrH2J7K
          claim_id: c_3VruHxqb4MaoJnLBVENLYh
          source_id: s_Fio1dE7ox3VD3Uy3mNJJVu
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
        id: c_1yiJ4LRfRGopCCabnbak1g
        subject_person_id: p_H4W2Q8y4hDuLu6zz75hDFe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達（606年—664年），唐人物。籍贯太原，曾任膺揚郎將。（中国历代人物传记资料库 CBDB 139433）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3JmG6G_uDx1JW9Xy9ndTfS
          claim_id: c_1yiJ4LRfRGopCCabnbak1g
          source_id: s_Fio1dE7ox3VD3Uy3mNJJVu
          stance: supports
          locator: CBDB:139433
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QuokLtJ3_rTXt1aEmRgkZp
        subject_person_id: p_dT5FQHL6RKDfn6xZSVZ5Aj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H4W2Q8y4hDuLu6zz75hDFe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_94_OeJYooEE5rTv6RdjrDQ
          claim_id: c_QuokLtJ3_rTXt1aEmRgkZp
          source_id: s_2Z1tc71teL5KbYAKYiGQDT
          stance: supports
          locator: 唐代墓誌匯編:二卷，Linde 24：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2Z1tc71teL5KbYAKYiGQDT
            source_type: api_record
            title: 中国历代人物传记资料库：王寵（CBDB 148000）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148000&o=json
            external_identifier: CBDB:148000
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.749Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dT5FQHL6RKDfn6xZSVZ5Aj
        status: active
        display_name: 王寵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王達 | accepted |
| birth.date | 606年 | accepted |
| death.date | 664年 | accepted |
| bio.summary | 王達（606年—664年），唐人物。籍贯太原，曾任膺揚郎將。（中国历代人物传记资料库 CBDB 139433） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dT5FQHL6RKDfn6xZSVZ5Aj | 王寵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寵（CBDB 148000）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148000&o=json)
- [中国历代人物传记资料库：王達（CBDB 139433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139433&o=json)
