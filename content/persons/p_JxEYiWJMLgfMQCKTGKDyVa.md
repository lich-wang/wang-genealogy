---
schema: wang-person/v1
id: p_JxEYiWJMLgfMQCKTGKDyVa
status: active
merged_into: null
display_name: 王瓌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XcrQ5rZqyLcvHRbWP5L5hE
        subject_person_id: p_JxEYiWJMLgfMQCKTGKDyVa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fWBXKiMX65JJSf6CEovEyt
          claim_id: c_XcrQ5rZqyLcvHRbWP5L5hE
          source_id: s_enjEAG48ExmW9uPwycdvkA
          stance: supports
          locator: CBDB:194719
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（194719）
          source: &a1
            id: s_enjEAG48ExmW9uPwycdvkA
            source_type: api_record
            title: 中国历代人物传记资料库：王瓌（CBDB 194719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194719&o=json
            external_identifier: CBDB:194719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.454Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_t2BMj911XaKNXn9RDbhVNV
        subject_person_id: p_JxEYiWJMLgfMQCKTGKDyVa
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 663年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LokJYigyYNEGo5QXgqxbuG
          claim_id: c_t2BMj911XaKNXn9RDbhVNV
          source_id: s_enjEAG48ExmW9uPwycdvkA
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
        id: c_XVRX182UJhJm5matRSwH46
        subject_person_id: p_JxEYiWJMLgfMQCKTGKDyVa
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
        - id: cs_aLAtH3US9Ep19MN7AaZdJ3
          claim_id: c_XVRX182UJhJm5matRSwH46
          source_id: s_enjEAG48ExmW9uPwycdvkA
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
        id: c_9ydCqTGKtkKn7REwJo9WLu
        subject_person_id: p_JxEYiWJMLgfMQCKTGKDyVa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BDS4TbTFZhcBaJhksQ7i7v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qcHNFC7iUzpIKwdgsI79KD
          claim_id: c_9ydCqTGKtkKn7REwJo9WLu
          source_id: s_72vbHX3h4b4vBiPhHGxSyi
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_72vbHX3h4b4vBiPhHGxSyi
            source_type: api_record
            title: 中国历代人物传记资料库：王弘效（CBDB 194718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194718&o=json
            external_identifier: CBDB:194718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.297Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BDS4TbTFZhcBaJhksQ7i7v
        status: active
        display_name: 王弘效
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瓌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓌 | accepted |
| death.date | 663年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BDS4TbTFZhcBaJhksQ7i7v | 王弘效 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓌（CBDB 194719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194719&o=json)
- [中国历代人物传记资料库：王弘效（CBDB 194718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194718&o=json)
