---
schema: wang-person/v1
id: p_8kvzu18KWCHGBJbrWxW4b9
status: active
merged_into: null
display_name: 王軾
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xNVBJ4d9Jusr1C4VEwcazw
        subject_person_id: p_8kvzu18KWCHGBJbrWxW4b9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5oGc99DPkMdunTFGKMymE8
          claim_id: c_xNVBJ4d9Jusr1C4VEwcazw
          source_id: s_dizqWBK4gRWFn4mBpUaSGR
          stance: supports
          locator: CBDB:67466
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67466）
          source: &a1
            id: s_dizqWBK4gRWFn4mBpUaSGR
            source_type: api_record
            title: 中国历代人物传记资料库：王軾（CBDB 67466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67466&o=json
            external_identifier: CBDB:67466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MFmj57ds1GRztjYeFPRf8F
        subject_person_id: p_8kvzu18KWCHGBJbrWxW4b9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1439年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CC97aSAh4f3QXq2tKBceDr
          claim_id: c_MFmj57ds1GRztjYeFPRf8F
          source_id: s_dizqWBK4gRWFn4mBpUaSGR
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
        id: c_2DN21h6yYF3CWEvMkGK2Zp
        subject_person_id: p_8kvzu18KWCHGBJbrWxW4b9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1506年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JRpLDMszcu14Qhv41a3yNn
          claim_id: c_2DN21h6yYF3CWEvMkGK2Zp
          source_id: s_dizqWBK4gRWFn4mBpUaSGR
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
        id: c_12HzCA85pTSXPngqZcuz6W
        subject_person_id: p_8kvzu18KWCHGBJbrWxW4b9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軾（1439年—1506年），明人物。明清進士進士，籍贯公安，入仕進士，曾任按察使、兵部尚書、大理寺卿。（中国历代人物传记资料库 CBDB 67466）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GYwvdcpc57dzDt3YnRDOx4
          claim_id: c_12HzCA85pTSXPngqZcuz6W
          source_id: s_dizqWBK4gRWFn4mBpUaSGR
          stance: supports
          locator: CBDB:67466
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SlIRY1cxrOG4IMFRMHoLxK
        subject_person_id: p_7Tia4RakEpFHiC5SDiDZSG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8kvzu18KWCHGBJbrWxW4b9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mxZ85apvdDYOI48VbQKDVR
          claim_id: c_SlIRY1cxrOG4IMFRMHoLxK
          source_id: s_dizqWBK4gRWFn4mBpUaSGR
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7Tia4RakEpFHiC5SDiDZSG
        status: active
        display_name: 王让
        merged_into_person_id: null
  children:
    - claim:
        id: c_5t8B24RV1rK3JKb5MI2IRN
        subject_person_id: p_8kvzu18KWCHGBJbrWxW4b9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NpyC4fmbMLGHGdrngDbHrH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9ZPo2faFxQI93NXpjVusb3
          claim_id: c_5t8B24RV1rK3JKb5MI2IRN
          source_id: s_dizqWBK4gRWFn4mBpUaSGR
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11079：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NpyC4fmbMLGHGdrngDbHrH
        status: active
        display_name: 王貢賞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_67biqzvgcgpynP-C_2Fo7K
        subject_person_id: p_8kvzu18KWCHGBJbrWxW4b9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_bwYb87M6DFugTWUd97Rhq5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7kYBibFEaYZkBck7c163yc
          claim_id: c_67biqzvgcgpynP-C_2Fo7K
          source_id: s_dizqWBK4gRWFn4mBpUaSGR
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bwYb87M6DFugTWUd97Rhq5
        status: active
        display_name: 张氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_513RO9GRRuZj9bhGUxNs1k
        subject_person_id: p_s2Sv6MvyL71fwz1JqSBrir
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8kvzu18KWCHGBJbrWxW4b9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c90P8hERrSlWLdRqLq3ptU
          claim_id: c_513RO9GRRuZj9bhGUxNs1k
          source_id: s_dizqWBK4gRWFn4mBpUaSGR
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_s2Sv6MvyL71fwz1JqSBrir
        status: active
        display_name: 王仁
        merged_into_person_id: null
    - claim:
        id: c_0jCFZJZSgeFydVRtxv_SYt
        subject_person_id: p_vxysH4B8xpbAGBTVKY3Dh2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8kvzu18KWCHGBJbrWxW4b9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s2ohmAhsfsZrh0PxPv1WV0
          claim_id: c_0jCFZJZSgeFydVRtxv_SYt
          source_id: s_dizqWBK4gRWFn4mBpUaSGR
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vxysH4B8xpbAGBTVKY3Dh2
        status: active
        display_name: 王原道
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_P1-jmxyZDZS8SBM6csGhDM
        subject_person_id: p_8kvzu18KWCHGBJbrWxW4b9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_enLWH5xMh6hD2cwvGp276E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ioSjaqnG_evnLK8v1aMSdy
          claim_id: c_P1-jmxyZDZS8SBM6csGhDM
          source_id: s_ColIeScHJMQd5dmajbH0Ny
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67466 王軾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ColIeScHJMQd5dmajbH0Ny
            source_type: api_record
            title: 中国历代人物传记资料库：王軻（CBDB 333210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333210&o=json
            external_identifier: CBDB:333210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_enLWH5xMh6hD2cwvGp276E
        status: active
        display_name: 王軻
        merged_into_person_id: null
    - claim:
        id: c_nHUsaZY-3-MBWoAsFcJPXc
        subject_person_id: p_8kvzu18KWCHGBJbrWxW4b9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_f3B8LBgrUtDCW64EF1K5R8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sw3OJ8LdN9FHNJa11DUYhv
          claim_id: c_nHUsaZY-3-MBWoAsFcJPXc
          source_id: s_vh2EMwT0MeEBVqzwL82zKu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67466 王軾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vh2EMwT0MeEBVqzwL82zKu
            source_type: api_record
            title: 中国历代人物传记资料库：王軏（CBDB 333199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333199&o=json
            external_identifier: CBDB:333199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_f3B8LBgrUtDCW64EF1K5R8
        status: active
        display_name: 王軏
        merged_into_person_id: null
    - claim:
        id: c_1-cPg4AztZ13DEPuC2FfJ4
        subject_person_id: p_8kvzu18KWCHGBJbrWxW4b9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vVwHqUM15KNKtfV7M38Bid
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V_irYjWlntznA9jONvgHVt
          claim_id: c_1-cPg4AztZ13DEPuC2FfJ4
          source_id: s_i067xdYO0Mx8HqX6kmbdOF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67466 王軾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_i067xdYO0Mx8HqX6kmbdOF
            source_type: api_record
            title: 中国历代人物传记资料库：王輗（CBDB 333188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333188&o=json
            external_identifier: CBDB:333188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vVwHqUM15KNKtfV7M38Bid
        status: active
        display_name: 王輗
        merged_into_person_id: null
---

# 王軾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軾 | accepted |
| birth.date | 1439年 | accepted |
| death.date | 1506年 | accepted |
| bio.summary | 王軾（1439年—1506年），明人物。明清進士進士，籍贯公安，入仕進士，曾任按察使、兵部尚書、大理寺卿。（中国历代人物传记资料库 CBDB 67466） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7Tia4RakEpFHiC5SDiDZSG | 王让 | accepted |
| children | p_NpyC4fmbMLGHGdrngDbHrH | 王貢賞 | accepted |
| spouses | p_bwYb87M6DFugTWUd97Rhq5 | 张氏 | accepted |
| ancestors | p_s2Sv6MvyL71fwz1JqSBrir | 王仁 | accepted |
| ancestors | p_vxysH4B8xpbAGBTVKY3Dh2 | 王原道 | accepted |
| other | p_enLWH5xMh6hD2cwvGp276E | 王軻 | accepted |
| other | p_f3B8LBgrUtDCW64EF1K5R8 | 王軏 | accepted |
| other | p_vVwHqUM15KNKtfV7M38Bid | 王輗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王軻（CBDB 333210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333210&o=json)
- [中国历代人物传记资料库：王輗（CBDB 333188）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333188&o=json)
- [中国历代人物传记资料库：王軾（CBDB 67466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67466&o=json)
- [中国历代人物传记资料库：王軏（CBDB 333199）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333199&o=json)
