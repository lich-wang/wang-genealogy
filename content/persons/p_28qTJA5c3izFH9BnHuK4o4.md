---
schema: wang-person/v1
id: p_28qTJA5c3izFH9BnHuK4o4
status: active
merged_into: null
display_name: 周氏
revision: 1
cbdb_id: 228810
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c-tz2MEc5_jZx0mg4mfi4B
        subject_person_id: p_28qTJA5c3izFH9BnHuK4o4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周氏，明人物。萬曆丙戌科進士進士。（中国历代人物传记资料库 CBDB 228810）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ysn1T6Mpm59b_jUKQMSySn
          claim_id: c_c-tz2MEc5_jZx0mg4mfi4B
          source_id: s_Y5j3HVtIbuix5IKXJ6lQZB
          stance: supports
          locator: CBDB:228810
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Y5j3HVtIbuix5IKXJ6lQZB
            source_type: api_record
            title: 中国历代人物传记资料库：周氏(沈瓚妻)（CBDB 228810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228810&o=json
            external_identifier: CBDB:228810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_L_9oJyu2ODaXdqj1FvN-RB
        subject_person_id: p_28qTJA5c3izFH9BnHuK4o4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zLevuT6QOt4mta4OdJJp6d
          claim_id: c_L_9oJyu2ODaXdqj1FvN-RB
          source_id: s_Y5j3HVtIbuix5IKXJ6lQZB
          stance: supports
          locator: CBDB:228810
          quotation: null
          interpretation_note: CBDB 明确记录的沈瓒配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_EtwWDzAkCTdUMou27mOudu
        subject_person_id: p_8Dvbg89PXkBEbBJAzYBkNw
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_28qTJA5c3izFH9BnHuK4o4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hTB7MYXVOgJPZ7CmK78F6A
          claim_id: c_EtwWDzAkCTdUMou27mOudu
          source_id: s_Y5j3HVtIbuix5IKXJ6lQZB
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8Dvbg89PXkBEbBJAzYBkNw
        status: active
        display_name: 沈瓒
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 周氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 周氏，明人物。萬曆丙戌科進士進士。（中国历代人物传记资料库 CBDB 228810） | accepted |
| name.primary | 周氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_8Dvbg89PXkBEbBJAzYBkNw | 沈瓒 | accepted |

## 外部来源

- [中国历代人物传记资料库：周氏(沈瓚妻)（CBDB 228810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228810&o=json)
