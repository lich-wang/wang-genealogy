---
schema: wang-person/v1
id: p_SSBSTyXDeZAvATshVXd9Rn
status: active
merged_into: null
display_name: 王鐵珊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_15Z4uMktGNGEs4uAvTqGE8
        subject_person_id: p_SSBSTyXDeZAvATshVXd9Rn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐵珊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zacC14uVh2iQn75xfsvNCY
          claim_id: c_15Z4uMktGNGEs4uAvTqGE8
          source_id: s_JPHn6JV7Qu7Q6Kz8AVAaLQ
          stance: supports
          locator: CBDB:71956
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71956）
          source: &a1
            id: s_JPHn6JV7Qu7Q6Kz8AVAaLQ
            source_type: api_record
            title: 中国历代人物传记资料库：王鐵珊（CBDB 71956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71956&o=json
            external_identifier: CBDB:71956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_idiJTw4inuoNR3ZzRTVHvW
        subject_person_id: p_SSBSTyXDeZAvATshVXd9Rn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1860年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ovUu6e4qH5afDsM5W9pUuf
          claim_id: c_idiJTw4inuoNR3ZzRTVHvW
          source_id: s_JPHn6JV7Qu7Q6Kz8AVAaLQ
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
        id: c_fF6cnq8gfY6C9SKgMPQG9Y
        subject_person_id: p_SSBSTyXDeZAvATshVXd9Rn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1900年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8BjgKDMmTMEbcP5iFQ3LkJ
          claim_id: c_fF6cnq8gfY6C9SKgMPQG9Y
          source_id: s_JPHn6JV7Qu7Q6Kz8AVAaLQ
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
        id: c_cECsMYTcjtNg4TwKVqAcsg
        subject_person_id: p_SSBSTyXDeZAvATshVXd9Rn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐵珊（1860年—1900年），清人物。明清進士進士，籍贯英山，入仕進士，曾任兵部職方司主事。（中国历代人物传记资料库 CBDB 71956）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7ofdyHUMgz905LnVAOvq8x
          claim_id: c_cECsMYTcjtNg4TwKVqAcsg
          source_id: s_JPHn6JV7Qu7Q6Kz8AVAaLQ
          stance: supports
          locator: CBDB:71956
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

# 王鐵珊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐵珊 | accepted |
| birth.date | 1860年 | accepted |
| death.date | 1900年 | accepted |
| bio.summary | 王鐵珊（1860年—1900年），清人物。明清進士進士，籍贯英山，入仕進士，曾任兵部職方司主事。（中国历代人物传记资料库 CBDB 71956） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鐵珊（CBDB 71956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71956&o=json)
