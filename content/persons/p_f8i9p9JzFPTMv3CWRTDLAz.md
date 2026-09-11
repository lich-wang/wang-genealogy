---
schema: wang-person/v1
id: p_f8i9p9JzFPTMv3CWRTDLAz
status: active
merged_into: null
display_name: 王鑾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U7ZXS3Av3kXf6hoH3HspPi
        subject_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SerhEwMXPZwmtQbvU6iQbD
          claim_id: c_U7ZXS3Av3kXf6hoH3HspPi
          source_id: s_jzgtJjtpFDj5d79TQgELye
          stance: supports
          locator: CBDB:126900
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126900）
          source: &a1
            id: s_jzgtJjtpFDj5d79TQgELye
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 126900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126900&o=json
            external_identifier: CBDB:126900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2Bg3c7hMoK77zuG9zDebUp
        subject_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1469年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vtLjM6Pm2K7KiXXrNkfHeB
          claim_id: c_2Bg3c7hMoK77zuG9zDebUp
          source_id: s_jzgtJjtpFDj5d79TQgELye
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
        id: c_orTZ612uG9bhpPXyQx1QQx
        subject_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1522年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LxbSng4DGCVLJ1RN3g6WQL
          claim_id: c_orTZ612uG9bhpPXyQx1QQx
          source_id: s_jzgtJjtpFDj5d79TQgELye
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
        id: c_s8fapdrqmYQHHL6gRZHJbN
        subject_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
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
        - id: cs_wL6t2zseZo4VFYmi8hcHZr
          claim_id: c_s8fapdrqmYQHHL6gRZHJbN
          source_id: s_jzgtJjtpFDj5d79TQgELye
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
        id: c_ymzzasFyzVfuab3ybBXqHP
        subject_person_id: p_39fzFnGh8FGp4S6Ku2uSE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WA8J2WDe58Pe5liOvS8_s1
          claim_id: c_ymzzasFyzVfuab3ybBXqHP
          source_id: s_jzgtJjtpFDj5d79TQgELye
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第七十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_39fzFnGh8FGp4S6Ku2uSE6
        status: active
        display_name: 王潣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_mMqKMwNjzgXkSamyW7aNIj
        subject_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_yxxKvKn43B7dqZ7HJwJzHt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QoVRzPvoXeIB44v6Y00gb6
          claim_id: c_mMqKMwNjzgXkSamyW7aNIj
          source_id: s_L22czEf6Qj-_nb6V0FsGZf
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第七十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_L22czEf6Qj-_nb6V0FsGZf
            source_type: api_record
            title: 中国历代人物传记资料库：尹氏(王鑾妻)（CBDB 276562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276562&o=json
            external_identifier: CBDB:276562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yxxKvKn43B7dqZ7HJwJzHt
        status: active
        display_name: 尹氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c__ADFgJYEZ4bHi3pfB3zslN
        subject_person_id: p_TwVQ5KFaUFCtVJ3wRcP4ig
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oE8P4n_P29in8_VFjVQLy5
          claim_id: c__ADFgJYEZ4bHi3pfB3zslN
          source_id: s_jzgtJjtpFDj5d79TQgELye
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第七十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TwVQ5KFaUFCtVJ3wRcP4ig
        status: active
        display_name: 王文昭
        merged_into_person_id: null
    - claim:
        id: c_MGB7xFFxNz8MkD3oMuY1Op
        subject_person_id: p_jdFKNSkoFDmYxhLidCvpTx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YEOCbNcA6YfF2KeiLg500a
          claim_id: c_MGB7xFFxNz8MkD3oMuY1Op
          source_id: s_jzgtJjtpFDj5d79TQgELye
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第七十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jdFKNSkoFDmYxhLidCvpTx
        status: active
        display_name: 王信
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑾 | accepted |
| birth.date | 1469年 | accepted |
| death.date | 1522年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_39fzFnGh8FGp4S6Ku2uSE6 | 王潣 | accepted |
| spouses | p_yxxKvKn43B7dqZ7HJwJzHt | 尹氏 | accepted |
| ancestors | p_TwVQ5KFaUFCtVJ3wRcP4ig | 王文昭 | accepted |
| ancestors | p_jdFKNSkoFDmYxhLidCvpTx | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑾（CBDB 126900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126900&o=json)
- [中国历代人物传记资料库：尹氏(王鑾妻)（CBDB 276562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276562&o=json)
