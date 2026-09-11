---
schema: wang-person/v1
id: p_MNWnaQNXFp3g3VB3ZjG5LZ
status: active
merged_into: null
display_name: 王彥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yQhdCQWMf1TVcX9wqiiTHo
        subject_person_id: p_MNWnaQNXFp3g3VB3ZjG5LZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3wxxB1kvRvFSkbSucefjoM
          claim_id: c_yQhdCQWMf1TVcX9wqiiTHo
          source_id: s_ABTWN85dtVQaA6FRmJ5t7C
          stance: supports
          locator: CBDB:39692
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39692）
          source: &a1
            id: s_ABTWN85dtVQaA6FRmJ5t7C
            source_type: api_record
            title: 中国历代人物传记资料库：王彥（CBDB 39692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39692&o=json
            external_identifier: CBDB:39692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.645Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pauPqLBFU21o58vFUmiFMx
        subject_person_id: p_MNWnaQNXFp3g3VB3ZjG5LZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1090年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dWSU1rVXBN8sJ1Hx3ibUyj
          claim_id: c_pauPqLBFU21o58vFUmiFMx
          source_id: s_ABTWN85dtVQaA6FRmJ5t7C
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
        id: c_ZjSje7N2gDRAmTzshY6Qkd
        subject_person_id: p_MNWnaQNXFp3g3VB3ZjG5LZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1139年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_12Xzf1WNY6ZPUF4qBjLb11
          claim_id: c_ZjSje7N2gDRAmTzshY6Qkd
          source_id: s_ABTWN85dtVQaA6FRmJ5t7C
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
        id: c_gBS23kyyNq8UZENGqr3Fsb
        subject_person_id: p_MNWnaQNXFp3g3VB3ZjG5LZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥（1090年—1139年），宋人物。籍贯上黨，身份为武將，曾任安撫使、觀察使、縣尉。（中国历代人物传记资料库 CBDB 39692）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0wWGWFDt_2sCs4RavQ5UBv
          claim_id: c_gBS23kyyNq8UZENGqr3Fsb
          source_id: s_ABTWN85dtVQaA6FRmJ5t7C
          stance: supports
          locator: CBDB:39692
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

# 王彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥 | accepted |
| birth.date | 1090年 | accepted |
| death.date | 1139年 | accepted |
| bio.summary | 王彥（1090年—1139年），宋人物。籍贯上黨，身份为武將，曾任安撫使、觀察使、縣尉。（中国历代人物传记资料库 CBDB 39692） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥（CBDB 39692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39692&o=json)
