---
schema: wang-person/v1
id: p_yt7BTSHcHKsWozExAQWe78
status: active
merged_into: null
display_name: 王純
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_25NfH1oxCrAjVX7ZpugxRh
        subject_person_id: p_yt7BTSHcHKsWozExAQWe78
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8vMG6ggtYi35w2g84tqi4m
          claim_id: c_25NfH1oxCrAjVX7ZpugxRh
          source_id: s_meJXB7joPkNKNK9ktUu4nK
          stance: supports
          locator: CBDB:126658
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126658）
          source: &a1
            id: s_meJXB7joPkNKNK9ktUu4nK
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 126658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126658&o=json
            external_identifier: CBDB:126658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HvU7XdotGQEN8QjWzveX3V
        subject_person_id: p_yt7BTSHcHKsWozExAQWe78
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純，明人物。明清進士進士，籍贯慈溪，身份为以疾廢，入仕進士。（中国历代人物传记资料库 CBDB 126658）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_77C2VtUntEXca-YvYQMwfU
          claim_id: c_HvU7XdotGQEN8QjWzveX3V
          source_id: s_meJXB7joPkNKNK9ktUu4nK
          stance: supports
          locator: CBDB:126658
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_amun5Jnm-uhYRNDyOym34I
        subject_person_id: p_uDFyS67KkM247fUDTDP1d8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yt7BTSHcHKsWozExAQWe78
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C6RiawLhBRxFN_zzv6HJwz
          claim_id: c_amun5Jnm-uhYRNDyOym34I
          source_id: s_8ec752UiV5HNKNAe1SktBm
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8ec752UiV5HNKNAe1SktBm
            source_type: api_record
            title: 中国历代人物传记资料库：王琯（CBDB 264716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264716&o=json
            external_identifier: CBDB:264716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.658Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uDFyS67KkM247fUDTDP1d8
        status: active
        display_name: 王琯
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_eOFnPLu7Qqmm_WXKi-U9wD
        subject_person_id: p_nxBo2SnEXoxZTjrPEbFJoT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yt7BTSHcHKsWozExAQWe78
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xqxaS63PULWhb61v-Cvk2x
          claim_id: c_eOFnPLu7Qqmm_WXKi-U9wD
          source_id: s_nf4QH3omi5jRaC64rKVCDw
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nf4QH3omi5jRaC64rKVCDw
            source_type: api_record
            title: 中国历代人物传记资料库：王潛（CBDB 264715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264715&o=json
            external_identifier: CBDB:264715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.658Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nxBo2SnEXoxZTjrPEbFJoT
        status: active
        display_name: 王潛
        merged_into_person_id: null
    - claim:
        id: c_e9eXscy5USIGHOkHgdeYXa
        subject_person_id: p_z5CxExuyo9Vg314B28Rnen
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yt7BTSHcHKsWozExAQWe78
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_McyltdoIIq1t6cggAT8WfQ
          claim_id: c_e9eXscy5USIGHOkHgdeYXa
          source_id: s_FuKTh7xsGKR7QyRLQE4g6E
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FuKTh7xsGKR7QyRLQE4g6E
            source_type: api_record
            title: 中国历代人物传记资料库：王祖昌（CBDB 264713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264713&o=json
            external_identifier: CBDB:264713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_z5CxExuyo9Vg314B28Rnen
        status: active
        display_name: 王祖昌
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_1K-m8u8D34HeK4aF7rrSq0
        subject_person_id: p_SH3VcC1scKdi3JGTtN23MK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yt7BTSHcHKsWozExAQWe78
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qFtFdlV26-IkxzbS5jtHWm
          claim_id: c_1K-m8u8D34HeK4aF7rrSq0
          source_id: s_JNghk0hFJo8jHPCf3bl28B
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126658 王純）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JNghk0hFJo8jHPCf3bl28B
            source_type: api_record
            title: 中国历代人物传记资料库：王綺（CBDB 264721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264721&o=json
            external_identifier: CBDB:264721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SH3VcC1scKdi3JGTtN23MK
        status: active
        display_name: 王綺
        merged_into_person_id: null
    - claim:
        id: c_VQ41ooUQpyu5VWhBsaMYNq
        subject_person_id: p_iE2US3dJj1aLU6791NixD9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yt7BTSHcHKsWozExAQWe78
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y2FXfEsgkDIME5v_A9Q4LX
          claim_id: c_VQ41ooUQpyu5VWhBsaMYNq
          source_id: s_g7u6vRf2qCQdzZ-AimS7nA
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126658 王純）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_g7u6vRf2qCQdzZ-AimS7nA
            source_type: api_record
            title: 中国历代人物传记资料库：王績（CBDB 264720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264720&o=json
            external_identifier: CBDB:264720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iE2US3dJj1aLU6791NixD9
        status: active
        display_name: 王績
        merged_into_person_id: null
    - claim:
        id: c_F2Htkjh6PSVUnbGLlap_2g
        subject_person_id: p_re9jUCqxrWKFvcQX57pMDi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yt7BTSHcHKsWozExAQWe78
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o0L6SzJjgLKT_J1U568Y_z
          claim_id: c_F2Htkjh6PSVUnbGLlap_2g
          source_id: s_POc2x0opd9f8HU7Ruz-qVc
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126658 王純）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_POc2x0opd9f8HU7Ruz-qVc
            source_type: api_record
            title: 中国历代人物传记资料库：王繼（CBDB 264719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264719&o=json
            external_identifier: CBDB:264719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_re9jUCqxrWKFvcQX57pMDi
        status: active
        display_name: 王繼
        merged_into_person_id: null
---

# 王純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王純 | accepted |
| bio.summary | 王純，明人物。明清進士進士，籍贯慈溪，身份为以疾廢，入仕進士。（中国历代人物传记资料库 CBDB 126658） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uDFyS67KkM247fUDTDP1d8 | 王琯 | accepted |
| ancestors | p_nxBo2SnEXoxZTjrPEbFJoT | 王潛 | accepted |
| ancestors | p_z5CxExuyo9Vg314B28Rnen | 王祖昌 | accepted |
| other | p_SH3VcC1scKdi3JGTtN23MK | 王綺 | accepted |
| other | p_iE2US3dJj1aLU6791NixD9 | 王績 | accepted |
| other | p_re9jUCqxrWKFvcQX57pMDi | 王繼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 126658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126658&o=json)
- [中国历代人物传记资料库：王琯（CBDB 264716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264716&o=json)
- [中国历代人物传记资料库：王績（CBDB 264720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264720&o=json)
- [中国历代人物传记资料库：王繼（CBDB 264719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264719&o=json)
- [中国历代人物传记资料库：王綺（CBDB 264721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264721&o=json)
- [中国历代人物传记资料库：王潛（CBDB 264715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264715&o=json)
- [中国历代人物传记资料库：王祖昌（CBDB 264713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264713&o=json)
