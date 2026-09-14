---
schema: wang-person/v1
id: p_V9h4wx8CnYiE9kuhcigTsZ
status: active
merged_into: null
display_name: 王橋
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JV7SQWZB4P2myi8XCSP44R
        subject_person_id: p_V9h4wx8CnYiE9kuhcigTsZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王橋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CUgBDm4ZCddXQy2B54mGjP
          claim_id: c_JV7SQWZB4P2myi8XCSP44R
          source_id: s_xX7pjSv1g5C9KDvPVmztTM
          stance: supports
          locator: CBDB:206070
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206070）
          source: &a1
            id: s_xX7pjSv1g5C9KDvPVmztTM
            source_type: api_record
            title: 中国历代人物传记资料库：王橋（CBDB 206070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206070&o=json
            external_identifier: CBDB:206070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9Y4aQQ85BmCfbRVELEtPnY
        subject_person_id: p_V9h4wx8CnYiE9kuhcigTsZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1543年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_phLteHxTQ68C26RfiXZxzx
          claim_id: c_9Y4aQQ85BmCfbRVELEtPnY
          source_id: s_xX7pjSv1g5C9KDvPVmztTM
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
        id: c_y3sBKKtVHWboGQZjS3eomD
        subject_person_id: p_V9h4wx8CnYiE9kuhcigTsZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王橋（生于1543年），明人物。明清進士進士，籍贯上元，入仕進士。（中国历代人物传记资料库 CBDB 206070）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sjQUvAJQmC712nb0Q7B_ag
          claim_id: c_y3sBKKtVHWboGQZjS3eomD
          source_id: s_xX7pjSv1g5C9KDvPVmztTM
          stance: supports
          locator: CBDB:206070
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_DEYgKyQHrFW7uanvrPlQKn
        subject_person_id: p_PbkuFaTj8zwtE1ycxfeDz1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_V9h4wx8CnYiE9kuhcigTsZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hFPqQXvf4-sPkzb2Mhu9Vh
          claim_id: c_DEYgKyQHrFW7uanvrPlQKn
          source_id: s_Z5RGaTY8MQ83mEMsFu3ozb
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第五十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z5RGaTY8MQ83mEMsFu3ozb
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 212930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212930&o=json
            external_identifier: CBDB:212930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PbkuFaTj8zwtE1ycxfeDz1
        status: active
        display_name: 王鉉
        merged_into_person_id: null
    - claim:
        id: c_XeOQc1ALM0qhAy33YluaUU
        subject_person_id: p_wVp2zoiCoxUWGiBg3m9Ne4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_V9h4wx8CnYiE9kuhcigTsZ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wrC67XkyQygcKW7-jk0_72
          claim_id: c_XeOQc1ALM0qhAy33YluaUU
          source_id: s_FsUvYcyn2sRj3X1vcYoDfN
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第五十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FsUvYcyn2sRj3X1vcYoDfN
            source_type: api_record
            title: 中国历代人物传记资料库：王晟（CBDB 212929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212929&o=json
            external_identifier: CBDB:212929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.097Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wVp2zoiCoxUWGiBg3m9Ne4
        status: active
        display_name: 王晟
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_aE1LuKizTUv0kNci9y43Od
        subject_person_id: p_SSCKkb8XHCHKFGV6qWzHmY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_V9h4wx8CnYiE9kuhcigTsZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ffBx_QkrqEKA0SJOfR_Q9p
          claim_id: c_aE1LuKizTUv0kNci9y43Od
          source_id: s_fvvfO0qIFFcuLMGhj0rs6a
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206070 王橋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fvvfO0qIFFcuLMGhj0rs6a
            source_type: api_record
            title: 中国历代人物传记资料库：王榆（CBDB 212936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212936&o=json
            external_identifier: CBDB:212936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SSCKkb8XHCHKFGV6qWzHmY
        status: active
        display_name: 王榆
        merged_into_person_id: null
    - claim:
        id: c_8IsZW6AKpqBfsHLRSgoi9O
        subject_person_id: p_V9h4wx8CnYiE9kuhcigTsZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e5F6ZXgwakteVNNR2yz2R9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eb7MN1oPlv-NpSKhdOkAR6
          claim_id: c_8IsZW6AKpqBfsHLRSgoi9O
          source_id: s_DcIix8HS4MUWx5fwi_vKG_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206070 王橋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DcIix8HS4MUWx5fwi_vKG_
            source_type: api_record
            title: 中国历代人物传记资料库：王楷（CBDB 212938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212938&o=json
            external_identifier: CBDB:212938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e5F6ZXgwakteVNNR2yz2R9
        status: active
        display_name: 王楷
        merged_into_person_id: null
    - claim:
        id: c_roePvbd-wDoS42wnq_MLtd
        subject_person_id: p_V9h4wx8CnYiE9kuhcigTsZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qHPRUVqkM1SxEAVuaDSj5E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KAxzRUBgG5MVCux4SUZd0a
          claim_id: c_roePvbd-wDoS42wnq_MLtd
          source_id: s_Iuo4Tamw590odAy_JXR0Tn
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206070 王橋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Iuo4Tamw590odAy_JXR0Tn
            source_type: api_record
            title: 中国历代人物传记资料库：王榛（CBDB 212935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212935&o=json
            external_identifier: CBDB:212935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qHPRUVqkM1SxEAVuaDSj5E
        status: active
        display_name: 王榛
        merged_into_person_id: null
---

# 王橋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王橋 | accepted |
| birth.date | 1543年 | accepted |
| bio.summary | 王橋（生于1543年），明人物。明清進士進士，籍贯上元，入仕進士。（中国历代人物传记资料库 CBDB 206070） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_PbkuFaTj8zwtE1ycxfeDz1 | 王鉉 | accepted |
| ancestors | p_wVp2zoiCoxUWGiBg3m9Ne4 | 王晟 | accepted |
| other | p_SSCKkb8XHCHKFGV6qWzHmY | 王榆 | accepted |
| other | p_e5F6ZXgwakteVNNR2yz2R9 | 王楷 | accepted |
| other | p_qHPRUVqkM1SxEAVuaDSj5E | 王榛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晟（CBDB 212929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212929&o=json)
- [中国历代人物传记资料库：王楷（CBDB 212938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212938&o=json)
- [中国历代人物传记资料库：王橋（CBDB 206070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206070&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 212930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212930&o=json)
- [中国历代人物传记资料库：王榆（CBDB 212936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212936&o=json)
- [中国历代人物传记资料库：王榛（CBDB 212935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212935&o=json)
