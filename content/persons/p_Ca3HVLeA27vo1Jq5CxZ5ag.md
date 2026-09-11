---
schema: wang-person/v1
id: p_Ca3HVLeA27vo1Jq5CxZ5ag
status: active
merged_into: null
display_name: 王繼先
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ASFAMHLFzG7VH3sKj7EdH7
        subject_person_id: p_Ca3HVLeA27vo1Jq5CxZ5ag
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_67h5ac7RzAC58ExaPAHCjm
          claim_id: c_ASFAMHLFzG7VH3sKj7EdH7
          source_id: s_4WDq7d5YBPHTQMx5yzDQh2
          stance: supports
          locator: CBDB:38418
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38418）
          source: &a1
            id: s_4WDq7d5YBPHTQMx5yzDQh2
            source_type: api_record
            title: 中国历代人物传记资料库：王繼先（CBDB 38418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38418&o=json
            external_identifier: CBDB:38418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.460Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Dnk1u6Z46iK4dKFsJBphVk
        subject_person_id: p_Ca3HVLeA27vo1Jq5CxZ5ag
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1098年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2QfNHA5Q1D8NtTBq5JLn3n
          claim_id: c_Dnk1u6Z46iK4dKFsJBphVk
          source_id: s_4WDq7d5YBPHTQMx5yzDQh2
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
        id: c_os4m8n7z3MZSXRm5xPLK3E
        subject_person_id: p_Ca3HVLeA27vo1Jq5CxZ5ag
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1181年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u18AwSwPYrcuDhCR2QMq4J
          claim_id: c_os4m8n7z3MZSXRm5xPLK3E
          source_id: s_4WDq7d5YBPHTQMx5yzDQh2
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
        id: c_8QButtZ8V6FJeV1FQgK5qU
        subject_person_id: p_Ca3HVLeA27vo1Jq5CxZ5ag
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bc8vgf3ubB2xTdsSZw5kEw
          claim_id: c_8QButtZ8V6FJeV1FQgK5qU
          source_id: s_4WDq7d5YBPHTQMx5yzDQh2
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
        id: c_5F9SdU2Lbn5r2ZLEl2Jcaz
        subject_person_id: p_Ca3HVLeA27vo1Jq5CxZ5ag
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9EmE8HnUzDNEFtwVVXAMQB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yOee_FFMUrpZ4RqERYUOmc
          claim_id: c_5F9SdU2Lbn5r2ZLEl2Jcaz
          source_id: s_BQaGAwdkqNx8YfVSS1C4GA
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BQaGAwdkqNx8YfVSS1C4GA
            source_type: api_record
            title: 中国历代人物传记资料库：王安道（CBDB 119742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119742&o=json
            external_identifier: CBDB:119742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9EmE8HnUzDNEFtwVVXAMQB
        status: active
        display_name: 王安道
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繼先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼先 | accepted |
| birth.date | 1098年 | accepted |
| death.date | 1181年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9EmE8HnUzDNEFtwVVXAMQB | 王安道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安道（CBDB 119742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119742&o=json)
- [中国历代人物传记资料库：王繼先（CBDB 38418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38418&o=json)
