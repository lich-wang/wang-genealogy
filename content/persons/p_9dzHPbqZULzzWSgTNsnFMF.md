---
schema: wang-person/v1
id: p_9dzHPbqZULzzWSgTNsnFMF
status: active
merged_into: null
display_name: 王回
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MGCsebyN4rHbaZNmJsmCf6
        subject_person_id: p_9dzHPbqZULzzWSgTNsnFMF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王回
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dxKK915HD6zfw21PMG8yDH
          claim_id: c_MGCsebyN4rHbaZNmJsmCf6
          source_id: s_Q2bUVaKg8dKKfqN2XNPYoU
          stance: supports
          locator: CBDB:25035
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25035）
          source: &a1
            id: s_Q2bUVaKg8dKKfqN2XNPYoU
            source_type: api_record
            title: 中国历代人物传记资料库：王回（CBDB 25035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25035&o=json
            external_identifier: CBDB:25035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9xe5vYj9CEQMYABkx5Vsee
        subject_person_id: p_9dzHPbqZULzzWSgTNsnFMF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1049年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_maDh7LCCPZZrDR6AcYehYn
          claim_id: c_9xe5vYj9CEQMYABkx5Vsee
          source_id: s_Q2bUVaKg8dKKfqN2XNPYoU
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
        id: c_43GSQzyhD75PyVSgyHZxRw
        subject_person_id: p_9dzHPbqZULzzWSgTNsnFMF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1101年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uxoWqHLB9KKsSjL7KT69Yz
          claim_id: c_43GSQzyhD75PyVSgyHZxRw
          source_id: s_Q2bUVaKg8dKKfqN2XNPYoU
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
        id: c_Fontx1YmNtMZHUhiheRM3a
        subject_person_id: p_9dzHPbqZULzzWSgTNsnFMF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王回（1049年—1101年），宋人物。籍贯仙遊，身份为入元祐黨籍者，入仕進士，曾任監察御史、睦親宅講書。（中国历代人物传记资料库 CBDB 25035）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uP_BGmQHC5xcfTJBkzw23O
          claim_id: c_Fontx1YmNtMZHUhiheRM3a
          source_id: s_Q2bUVaKg8dKKfqN2XNPYoU
          stance: supports
          locator: CBDB:25035
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

# 王回

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王回 | accepted |
| birth.date | 1049年 | accepted |
| death.date | 1101年 | accepted |
| bio.summary | 王回（1049年—1101年），宋人物。籍贯仙遊，身份为入元祐黨籍者，入仕進士，曾任監察御史、睦親宅講書。（中国历代人物传记资料库 CBDB 25035） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王回（CBDB 25035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25035&o=json)
