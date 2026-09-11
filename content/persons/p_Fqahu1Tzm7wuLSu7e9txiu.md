---
schema: wang-person/v1
id: p_Fqahu1Tzm7wuLSu7e9txiu
status: active
merged_into: null
display_name: 王與安
cbdb_id: 571645
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ACqPw4SH1VoiRLmJu6vAyr
        subject_person_id: p_Fqahu1Tzm7wuLSu7e9txiu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與安（卒于1067年），宋人物。中国历代人物传记资料库（CBDB）以人物编号 571645 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_3Et2QNIUqJLvyLEZgOZV0F
          claim_id: c_ACqPw4SH1VoiRLmJu6vAyr
          source_id: s_eL2HQ1RQHmsx5gGGKM3ujY
          stance: supports
          locator: CBDB:571645
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_eL2HQ1RQHmsx5gGGKM3ujY
            source_type: api_record
            title: 中国历代人物传记资料库：王與安（CBDB 571645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571645&o=json
            external_identifier: CBDB:571645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_AfZW17EUXJ6Gy87bxfK9x1
        subject_person_id: p_Fqahu1Tzm7wuLSu7e9txiu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1067年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1067-01-01
            latest: 1067-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6QmrNKoSDtmdo1YxqJxDfi
          claim_id: c_AfZW17EUXJ6Gy87bxfK9x1
          source_id: s_eL2HQ1RQHmsx5gGGKM3ujY
          stance: supports
          locator: CBDB:571645
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 1067
          source:
            id: s_eL2HQ1RQHmsx5gGGKM3ujY
            source_type: api_record
            title: 中国历代人物传记资料库：王與安（CBDB 571645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571645&o=json
            external_identifier: CBDB:571645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q8NfnzdnS5MJ8eUxoKmJKM
        subject_person_id: p_Fqahu1Tzm7wuLSu7e9txiu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_A92fPQUt4xa1c7zk1GAFZn
          claim_id: c_Q8NfnzdnS5MJ8eUxoKmJKM
          source_id: s_eL2HQ1RQHmsx5gGGKM3ujY
          stance: supports
          locator: CBDB:571645
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 1067
          source:
            id: s_eL2HQ1RQHmsx5gGGKM3ujY
            source_type: api_record
            title: 中国历代人物传记资料库：王與安（CBDB 571645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571645&o=json
            external_identifier: CBDB:571645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ilGTsBifuUHDu5mIN-d_oL
        subject_person_id: p_Fqahu1Tzm7wuLSu7e9txiu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x7QK6Yqt4A5YCYRDZUuZNJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xUx6_T7uIIcbKMxmuclMsV
          claim_id: c_ilGTsBifuUHDu5mIN-d_oL
          source_id: s_XqoxLrQT9D3emoZFWGvyhK
          stance: supports
          locator: 芒洛冢墓遺文，王彭墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XqoxLrQT9D3emoZFWGvyhK
            source_type: api_record
            title: 中国历代人物传记资料库：王彭（CBDB 571644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571644&o=json
            external_identifier: CBDB:571644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_x7QK6Yqt4A5YCYRDZUuZNJ
        status: active
        display_name: 王彭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_g7ozE-wzwincckgmIfB_Mk
        subject_person_id: p_Fqahu1Tzm7wuLSu7e9txiu
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_eq2S75ncAEQCG37W386Tdg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kl9YuJYu5Gm05jglWWBDTp
          claim_id: c_g7ozE-wzwincckgmIfB_Mk
          source_id: s_55mynRwzSXqR0UUf7vFTFj
          stance: supports
          locator: 芒洛冢墓遺文，王彭墓志：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_55mynRwzSXqR0UUf7vFTFj
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王與安妻)（CBDB 571647）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571647&o=json
            external_identifier: CBDB:571647
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eq2S75ncAEQCG37W386Tdg
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王與安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王與安（卒于1067年），宋人物。中国历代人物传记资料库（CBDB）以人物编号 571645 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 1067年 | accepted |
| name.primary | 王與安 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_x7QK6Yqt4A5YCYRDZUuZNJ | 王彭 | accepted |
| spouses | p_eq2S75ncAEQCG37W386Tdg | 陳氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王與安妻)（CBDB 571647）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571647&o=json)
- [中国历代人物传记资料库：王彭（CBDB 571644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571644&o=json)
- [中国历代人物传记资料库：王與安（CBDB 571645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571645&o=json)
