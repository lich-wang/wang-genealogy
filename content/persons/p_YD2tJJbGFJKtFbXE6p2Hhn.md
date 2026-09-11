---
schema: wang-person/v1
id: p_YD2tJJbGFJKtFbXE6p2Hhn
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 162062
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dprb38cTJKq5a-hUdH6Z8b
        subject_person_id: p_YD2tJJbGFJKtFbXE6p2Hhn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yEph1BJgqSV-7KsAMDG_DL
          claim_id: c_dprb38cTJKq5a-hUdH6Z8b
          source_id: s_JcPLV9-7WYZ9RfFUivVtiO
          stance: supports
          locator: CBDB:162062
          quotation: null
          interpretation_note: CBDB 明确记录的王恭配偶
          source: &a1
            id: s_JcPLV9-7WYZ9RfFUivVtiO
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王恭妻)（CBDB 162062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162062&o=json
            external_identifier: CBDB:162062
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
        id: c_qDmCTbjbYiFW7wlRtHLGEW
        subject_person_id: p_BXB9NPfGnpuNgxRvuHiZwL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YD2tJJbGFJKtFbXE6p2Hhn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8uo5HZW4Yw_jUqrXxo9QA3
          claim_id: c_qDmCTbjbYiFW7wlRtHLGEW
          source_id: s_JcPLV9-7WYZ9RfFUivVtiO
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yonghui25：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BXB9NPfGnpuNgxRvuHiZwL
        status: active
        display_name: 王恭
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BXB9NPfGnpuNgxRvuHiZwL | 王恭 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王恭妻)（CBDB 162062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162062&o=json)
