---
schema: wang-person/v1
id: p_UPHfkGqotrdZukuBX5GD3d
status: active
merged_into: null
display_name: 王茂欽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B4SeoGNszNPesgtVC3K7Tm
        subject_person_id: p_UPHfkGqotrdZukuBX5GD3d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2K63eh3A6bgP7afko63D4P
          claim_id: c_B4SeoGNszNPesgtVC3K7Tm
          source_id: s_LczUX6F17kg3Wy6itP6CQY
          stance: supports
          locator: CBDB:683895
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683895）
          source: &a1
            id: s_LczUX6F17kg3Wy6itP6CQY
            source_type: api_record
            title: 中国历代人物传记资料库：王茂欽（CBDB 683895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683895&o=json
            external_identifier: CBDB:683895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_38WHYqLqEr6yNQD9H1BXoX
        subject_person_id: p_UPHfkGqotrdZukuBX5GD3d
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
        - id: cs_DJAKyXQJGk3p8coJ4aHY7n
          claim_id: c_38WHYqLqEr6yNQD9H1BXoX
          source_id: s_LczUX6F17kg3Wy6itP6CQY
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
        id: c_F2NJnuDcWuZ-SJuvrjqWBr
        subject_person_id: p_5aSsEU9814DJHEv44h4j5R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UPHfkGqotrdZukuBX5GD3d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A2hB2-_RIGY2D3Bigznxqb
          claim_id: c_F2NJnuDcWuZ-SJuvrjqWBr
          source_id: s_LczUX6F17kg3Wy6itP6CQY
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王章、王虔、王珣墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5aSsEU9814DJHEv44h4j5R
        status: active
        display_name: 王珣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_H4XFBlsvoetSI6T9tZeSNF
        subject_person_id: p_UPHfkGqotrdZukuBX5GD3d
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xQkZ3hFp33zcTEvbb36MQN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RATrbnvtpvFPAUJ9Y9NUU5
          claim_id: c_H4XFBlsvoetSI6T9tZeSNF
          source_id: s_QeEms9U0yT6vr-xkMRV_l2
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王章、王虔、王珣墓誌：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QeEms9U0yT6vr-xkMRV_l2
            source_type: api_record
            title: 中国历代人物传记资料库：蘇氏(王茂欽妻)（CBDB 683896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683896&o=json
            external_identifier: CBDB:683896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xQkZ3hFp33zcTEvbb36MQN
        status: active
        display_name: 蘇氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王茂欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂欽 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5aSsEU9814DJHEv44h4j5R | 王珣 | accepted |
| spouses | p_xQkZ3hFp33zcTEvbb36MQN | 蘇氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：蘇氏(王茂欽妻)（CBDB 683896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683896&o=json)
- [中国历代人物传记资料库：王茂欽（CBDB 683895）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683895&o=json)
