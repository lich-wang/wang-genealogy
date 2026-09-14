---
schema: wang-person/v1
id: p_fVVctU3oARvj93SKk81Eji
status: active
merged_into: null
display_name: 王祐
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oMXDPUeYvXGWy5685Ct4RH
        subject_person_id: p_fVVctU3oARvj93SKk81Eji
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qT6b6QYRx71HLG3yvSBfU6
          claim_id: c_oMXDPUeYvXGWy5685Ct4RH
          source_id: s_S8PvPikNKeqv9SvZpdTNYm
          stance: supports
          locator: CBDB:202067
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202067）
          source: &a1
            id: s_S8PvPikNKeqv9SvZpdTNYm
            source_type: api_record
            title: 中国历代人物传记资料库：王祐（CBDB 202067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202067&o=json
            external_identifier: CBDB:202067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4FRgGE2oqto8L5Tfp3Pn3N
        subject_person_id: p_fVVctU3oARvj93SKk81Eji
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1479年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BR59mDJ2bcM2MCgothPJ7v
          claim_id: c_4FRgGE2oqto8L5Tfp3Pn3N
          source_id: s_S8PvPikNKeqv9SvZpdTNYm
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
        id: c_N9BCy3tDpdzWX7VGJxK6nu
        subject_person_id: p_fVVctU3oARvj93SKk81Eji
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祐（生于1479年），明人物。正德十二年進士，籍贯建平，入仕進士。（中国历代人物传记资料库 CBDB 202067）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a-C34nBtQw5Pl_nzjI5lHD
          claim_id: c_N9BCy3tDpdzWX7VGJxK6nu
          source_id: s_S8PvPikNKeqv9SvZpdTNYm
          stance: supports
          locator: CBDB:202067
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ct7lzsfSOxAbhCecVT7c7W
        subject_person_id: p_rMH6azHPPfCWNVYvRKv58F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fVVctU3oARvj93SKk81Eji
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TkW50ZX8vZ1sXKppHEQzWc
          claim_id: c_Ct7lzsfSOxAbhCecVT7c7W
          source_id: s_S8PvPikNKeqv9SvZpdTNYm
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百一十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rMH6azHPPfCWNVYvRKv58F
        status: active
        display_name: 王璲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_2qZaCiANTtLudHgqhSWR1L
        subject_person_id: p_fVVctU3oARvj93SKk81Eji
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MFqt9n2LVyLYhLxLS4KsNk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LMVg52V05b8ynZ1JaumguK
          claim_id: c_2qZaCiANTtLudHgqhSWR1L
          source_id: s_wZw6P6jDTiee7RE6XisZAc
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百一十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wZw6P6jDTiee7RE6XisZAc
            source_type: api_record
            title: 中国历代人物传记资料库：戴氏(王祐妻)（CBDB 282817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282817&o=json
            external_identifier: CBDB:282817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MFqt9n2LVyLYhLxLS4KsNk
        status: active
        display_name: 戴氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_ROzlADA7Lc1o3vr6ayYpiF
        subject_person_id: p_UDVLaDy9kGf4256o9Lw5uU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fVVctU3oARvj93SKk81Eji
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s8njGAzb4esZCblz6oR5XL
          claim_id: c_ROzlADA7Lc1o3vr6ayYpiF
          source_id: s_S8PvPikNKeqv9SvZpdTNYm
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百一十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UDVLaDy9kGf4256o9Lw5uU
        status: active
        display_name: 王子讓
        merged_into_person_id: null
    - claim:
        id: c_mETJWNw53u7LmcG2ND9lxz
        subject_person_id: p_GancgNeQ6rSGRzjnYquakL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fVVctU3oARvj93SKk81Eji
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gu5aamzsIv-LhEIAX4xV5a
          claim_id: c_mETJWNw53u7LmcG2ND9lxz
          source_id: s_S8PvPikNKeqv9SvZpdTNYm
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百一十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GancgNeQ6rSGRzjnYquakL
        status: active
        display_name: 王信
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_CVhvjyQBwFNt5hDyp6_oN8
        subject_person_id: p_59QovxVPXCB82j7aTmqHP5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVVctU3oARvj93SKk81Eji
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H3gPwtFkWkYMM136VIuhsO
          claim_id: c_CVhvjyQBwFNt5hDyp6_oN8
          source_id: s_USbXKNKEoGBpbKylea6Ws1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202067 王祐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_USbXKNKEoGBpbKylea6Ws1
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 282819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282819&o=json
            external_identifier: CBDB:282819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_59QovxVPXCB82j7aTmqHP5
        status: active
        display_name: 王祿
        merged_into_person_id: null
    - claim:
        id: c_19I-vwrv3zZI4pbe9sP50i
        subject_person_id: p_8frUJ3LrDhGKx8fT6HKVXg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVVctU3oARvj93SKk81Eji
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bLVKezSQcjeeXv8UWltuAm
          claim_id: c_19I-vwrv3zZI4pbe9sP50i
          source_id: s_trO5HfTRAzCPMm1Men-Gf-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202067 王祐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_trO5HfTRAzCPMm1Men-Gf-
            source_type: api_record
            title: 中国历代人物传记资料库：王祉（CBDB 282824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282824&o=json
            external_identifier: CBDB:282824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8frUJ3LrDhGKx8fT6HKVXg
        status: active
        display_name: 王祉
        merged_into_person_id: null
    - claim:
        id: c_q1PX32ob4i19AuMQ1k9i5d
        subject_person_id: p_JRNXV236M9H6uA15akL81F
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVVctU3oARvj93SKk81Eji
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r5WKf_mP6qTw5Wp-r-rxfN
          claim_id: c_q1PX32ob4i19AuMQ1k9i5d
          source_id: s_CkBFh1vAL1uaohcxT505F0
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202067 王祐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CkBFh1vAL1uaohcxT505F0
            source_type: api_record
            title: 中国历代人物传记资料库：王初（CBDB 282818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282818&o=json
            external_identifier: CBDB:282818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JRNXV236M9H6uA15akL81F
        status: active
        display_name: 王初
        merged_into_person_id: null
    - claim:
        id: c_6SsyAhLZedhW3mAsi2WM0R
        subject_person_id: p_KrhxT7N8BdrnVPUveD5RRk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVVctU3oARvj93SKk81Eji
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_02sbV90pD_EeeyayA8tojg
          claim_id: c_6SsyAhLZedhW3mAsi2WM0R
          source_id: s_7tcHoRPsiWBQ-ty_pesZ1o
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202067 王祐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7tcHoRPsiWBQ-ty_pesZ1o
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 282822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282822&o=json
            external_identifier: CBDB:282822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KrhxT7N8BdrnVPUveD5RRk
        status: active
        display_name: 王祚
        merged_into_person_id: null
    - claim:
        id: c_Ej_HpwJNioCb1lqm5gPt75
        subject_person_id: p_aH98rB2QEw4PBn91pBksXR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVVctU3oARvj93SKk81Eji
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iuwac_V-z4PsmmuxNhOb_F
          claim_id: c_Ej_HpwJNioCb1lqm5gPt75
          source_id: s_ZgI0awoOyx7FStwGRdVp3X
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202067 王祐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZgI0awoOyx7FStwGRdVp3X
            source_type: api_record
            title: 中国历代人物传记资料库：王禧（CBDB 282821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282821&o=json
            external_identifier: CBDB:282821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aH98rB2QEw4PBn91pBksXR
        status: active
        display_name: 王禧
        merged_into_person_id: null
    - claim:
        id: c_epkPIH2TJVSCo1pLGnPc0C
        subject_person_id: p_fVVctU3oARvj93SKk81Eji
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_urAcQeg5gkmYMwmfruuECn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uOmmpFZwUkCMbsh2E5nyNg
          claim_id: c_epkPIH2TJVSCo1pLGnPc0C
          source_id: s_JIBL0sWQtdESbTixmnKxxo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202067 王祐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JIBL0sWQtdESbTixmnKxxo
            source_type: api_record
            title: 中国历代人物传记资料库：王禟（CBDB 282823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282823&o=json
            external_identifier: CBDB:282823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_urAcQeg5gkmYMwmfruuECn
        status: active
        display_name: 王禟
        merged_into_person_id: null
---

# 王祐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祐 | accepted |
| birth.date | 1479年 | accepted |
| bio.summary | 王祐（生于1479年），明人物。正德十二年進士，籍贯建平，入仕進士。（中国历代人物传记资料库 CBDB 202067） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rMH6azHPPfCWNVYvRKv58F | 王璲 | accepted |
| spouses | p_MFqt9n2LVyLYhLxLS4KsNk | 戴氏 | accepted |
| ancestors | p_UDVLaDy9kGf4256o9Lw5uU | 王子讓 | accepted |
| ancestors | p_GancgNeQ6rSGRzjnYquakL | 王信 | accepted |
| other | p_59QovxVPXCB82j7aTmqHP5 | 王祿 | accepted |
| other | p_8frUJ3LrDhGKx8fT6HKVXg | 王祉 | accepted |
| other | p_JRNXV236M9H6uA15akL81F | 王初 | accepted |
| other | p_KrhxT7N8BdrnVPUveD5RRk | 王祚 | accepted |
| other | p_aH98rB2QEw4PBn91pBksXR | 王禧 | accepted |
| other | p_urAcQeg5gkmYMwmfruuECn | 王禟 | accepted |

## 外部来源

- [中国历代人物传记资料库：戴氏(王祐妻)（CBDB 282817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282817&o=json)
- [中国历代人物传记资料库：王初（CBDB 282818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282818&o=json)
- [中国历代人物传记资料库：王祿（CBDB 282819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282819&o=json)
- [中国历代人物传记资料库：王禟（CBDB 282823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282823&o=json)
- [中国历代人物传记资料库：王禧（CBDB 282821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282821&o=json)
- [中国历代人物传记资料库：王祐（CBDB 202067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202067&o=json)
- [中国历代人物传记资料库：王祉（CBDB 282824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282824&o=json)
- [中国历代人物传记资料库：王祚（CBDB 282822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282822&o=json)
