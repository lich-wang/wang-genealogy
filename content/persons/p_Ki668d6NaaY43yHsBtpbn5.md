---
schema: wang-person/v1
id: p_Ki668d6NaaY43yHsBtpbn5
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 326522
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rkOieYSyy-sF0tJdMUtiMg
        subject_person_id: p_Ki668d6NaaY43yHsBtpbn5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aCJDJmiqrQ_Fpkl95qnwmW
          claim_id: c_rkOieYSyy-sF0tJdMUtiMg
          source_id: s_6EcocTdjv0_TbyBQqRhOZ6
          stance: supports
          locator: CBDB:326522
          quotation: null
          interpretation_note: CBDB 明确记录的王廷輔配偶
          source: &a1
            id: s_6EcocTdjv0_TbyBQqRhOZ6
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王廷輔妻)（CBDB 326522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326522&o=json
            external_identifier: CBDB:326522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_86eZdIxw5i6ALfhXzpvTN4
        subject_person_id: p_7x8JYYpfNVCNz7epCoiZPm
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Ki668d6NaaY43yHsBtpbn5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6jnZSJ7Sr_O7KJgFLFCFsO
          claim_id: c_86eZdIxw5i6ALfhXzpvTN4
          source_id: s_6EcocTdjv0_TbyBQqRhOZ6
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第二十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7x8JYYpfNVCNz7epCoiZPm
        status: active
        display_name: 王廷輔
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7x8JYYpfNVCNz7epCoiZPm | 王廷輔 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王廷輔妻)（CBDB 326522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326522&o=json)
