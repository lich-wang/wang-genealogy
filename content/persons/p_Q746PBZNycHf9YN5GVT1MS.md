---
schema: wang-person/v1
id: p_Q746PBZNycHf9YN5GVT1MS
status: active
merged_into: null
display_name: 王璇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p2H6vxj1civAkRsAPM1kfe
        subject_person_id: p_Q746PBZNycHf9YN5GVT1MS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mErpXh1HVAVYCbjpJbogPi
          claim_id: c_p2H6vxj1civAkRsAPM1kfe
          source_id: s_bGRhzNa9gJ7xekBJZUPaH1
          stance: supports
          locator: CBDB:200297
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200297）
          source: &a1
            id: s_bGRhzNa9gJ7xekBJZUPaH1
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 200297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200297&o=json
            external_identifier: CBDB:200297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.602Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_widZuLLJz63W68g5h1tTgk
        subject_person_id: p_Q746PBZNycHf9YN5GVT1MS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1445年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CrT4Kk2yP3TZr6WyqHmArd
          claim_id: c_widZuLLJz63W68g5h1tTgk
          source_id: s_bGRhzNa9gJ7xekBJZUPaH1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CoLLnEA1osjJor61TnX4ih
        subject_person_id: p_Q746PBZNycHf9YN5GVT1MS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZjJK1oq97xpvEL86xQQCiD
          claim_id: c_CoLLnEA1osjJor61TnX4ih
          source_id: s_bGRhzNa9gJ7xekBJZUPaH1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JV1TiK-VwWtioqf-V-Prhp
        subject_person_id: p_A3heW27H9g2mVn1UvcsyD4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q746PBZNycHf9YN5GVT1MS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rJI0fIZSIgdgGgMaOCxwNZ
          claim_id: c_JV1TiK-VwWtioqf-V-Prhp
          source_id: s_7tAA1KTugFjJh6gC8Msmfe
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第四十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7tAA1KTugFjJh6gC8Msmfe
            source_type: api_record
            title: 中国历代人物传记资料库：王時佐（CBDB 256026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256026&o=json
            external_identifier: CBDB:256026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.374Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A3heW27H9g2mVn1UvcsyD4
        status: active
        display_name: 王時佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璇 | accepted |
| birth.date | 1445年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A3heW27H9g2mVn1UvcsyD4 | 王時佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時佐（CBDB 256026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256026&o=json)
- [中国历代人物传记资料库：王璇（CBDB 200297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200297&o=json)
