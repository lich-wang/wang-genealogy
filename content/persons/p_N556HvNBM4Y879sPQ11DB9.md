---
schema: wang-person/v1
id: p_N556HvNBM4Y879sPQ11DB9
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 253920
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hMIght4iClhXeZoKou1xkI
        subject_person_id: p_N556HvNBM4Y879sPQ11DB9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fDZFitHl4d766oQB23dZrj
          claim_id: c_hMIght4iClhXeZoKou1xkI
          source_id: s_lt5wloLw0FOnmzp3s1q2QV
          stance: supports
          locator: CBDB:253920
          quotation: null
          interpretation_note: CBDB 明确记录的王艮配偶
          source: &a1
            id: s_lt5wloLw0FOnmzp3s1q2QV
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王艮妻)（CBDB 253920）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253920&o=json
            external_identifier: CBDB:253920
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
        id: c_TaOksfS6J2tmCvf0qLnxov
        subject_person_id: p_CxY5QtqK8BuHWqQgSQqbEb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_N556HvNBM4Y879sPQ11DB9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c_D1tQ5IpHxB028cLERqf2
          claim_id: c_TaOksfS6J2tmCvf0qLnxov
          source_id: s_lt5wloLw0FOnmzp3s1q2QV
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第一甲第二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CxY5QtqK8BuHWqQgSQqbEb
        status: active
        display_name: 王艮
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_CxY5QtqK8BuHWqQgSQqbEb | 王艮 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王艮妻)（CBDB 253920）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253920&o=json)
