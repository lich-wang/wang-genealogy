---
schema: wang-person/v1
id: p_f8i9p9JzFPTMv3CWRTDLAz
status: active
merged_into: null
display_name: 王鑾
revision: 7
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
          text: 王鑾（1469年—1522年），明人物。明清進士進士，籍贯南京錦衣衛，入仕進士。（中国历代人物传记资料库 CBDB 126900）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2h3I2XLwFICAtdIosl4sFM
          claim_id: c_s8fapdrqmYQHHL6gRZHJbN
          source_id: s_jzgtJjtpFDj5d79TQgELye
          stance: supports
          locator: CBDB:126900
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  other:
    - claim:
        id: c_KhynF6CHJJ-UaOwAsOg1s8
        subject_person_id: p_Cfc62p6vvVA2LH7CqS9MKG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_htG6EYl972oraZQpuuzQCU
          claim_id: c_KhynF6CHJJ-UaOwAsOg1s8
          source_id: s_-D5fZ7HgvniMT1_Qk-oP5e
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126900 王鑾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-D5fZ7HgvniMT1_Qk-oP5e
            source_type: api_record
            title: 中国历代人物传记资料库：王金（CBDB 276565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276565&o=json
            external_identifier: CBDB:276565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Cfc62p6vvVA2LH7CqS9MKG
        status: active
        display_name: 王金
        merged_into_person_id: null
    - claim:
        id: c_JLBHysdcIE2IQHitYaZgHG
        subject_person_id: p_FqmJJi7DtBeLpaSfs4U5JQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pAB3WT96fNafzDQV1Xz6pG
          claim_id: c_JLBHysdcIE2IQHitYaZgHG
          source_id: s_VqAe_JP-EMLLVCHnHtNoPc
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126900 王鑾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VqAe_JP-EMLLVCHnHtNoPc
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 276566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276566&o=json
            external_identifier: CBDB:276566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FqmJJi7DtBeLpaSfs4U5JQ
        status: active
        display_name: 王鐸
        merged_into_person_id: null
    - claim:
        id: c_WY6PGgiaW5elYahpmph9u1
        subject_person_id: p_Gb9QWdFikDvFvpsGPNQQ2c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HpJus1mFO55TvYxUnQkvE6
          claim_id: c_WY6PGgiaW5elYahpmph9u1
          source_id: s_-nQfuioO7j7g0ThKPZOMBw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126900 王鑾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-nQfuioO7j7g0ThKPZOMBw
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 276567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276567&o=json
            external_identifier: CBDB:276567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Gb9QWdFikDvFvpsGPNQQ2c
        status: active
        display_name: 王錦
        merged_into_person_id: null
    - claim:
        id: c_uMRKHe0lFYIunIWXQ5gUoF
        subject_person_id: p_b6ooQKqckNTBL18LKBeM3a
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ksEYZ14IcOX40r4xaKhkQC
          claim_id: c_uMRKHe0lFYIunIWXQ5gUoF
          source_id: s_YIS6twoben07JGds-X6oC_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126900 王鑾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YIS6twoben07JGds-X6oC_
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 276563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276563&o=json
            external_identifier: CBDB:276563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_b6ooQKqckNTBL18LKBeM3a
        status: active
        display_name: 王欽
        merged_into_person_id: null
---

# 王鑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑾 | accepted |
| birth.date | 1469年 | accepted |
| death.date | 1522年 | accepted |
| bio.summary | 王鑾（1469年—1522年），明人物。明清進士進士，籍贯南京錦衣衛，入仕進士。（中国历代人物传记资料库 CBDB 126900） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_39fzFnGh8FGp4S6Ku2uSE6 | 王潣 | accepted |
| spouses | p_yxxKvKn43B7dqZ7HJwJzHt | 尹氏 | accepted |
| ancestors | p_TwVQ5KFaUFCtVJ3wRcP4ig | 王文昭 | accepted |
| ancestors | p_jdFKNSkoFDmYxhLidCvpTx | 王信 | accepted |
| other | p_Cfc62p6vvVA2LH7CqS9MKG | 王金 | accepted |
| other | p_FqmJJi7DtBeLpaSfs4U5JQ | 王鐸 | accepted |
| other | p_Gb9QWdFikDvFvpsGPNQQ2c | 王錦 | accepted |
| other | p_b6ooQKqckNTBL18LKBeM3a | 王欽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 276566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276566&o=json)
- [中国历代人物传记资料库：王金（CBDB 276565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276565&o=json)
- [中国历代人物传记资料库：王錦（CBDB 276567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276567&o=json)
- [中国历代人物传记资料库：王鑾（CBDB 126900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126900&o=json)
- [中国历代人物传记资料库：王欽（CBDB 276563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276563&o=json)
- [中国历代人物传记资料库：尹氏(王鑾妻)（CBDB 276562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276562&o=json)
