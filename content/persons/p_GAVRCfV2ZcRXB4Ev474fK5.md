---
schema: wang-person/v1
id: p_GAVRCfV2ZcRXB4Ev474fK5
status: active
merged_into: null
display_name: 王注
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aETNGvGAjJUgPwaDF6KUAW
        subject_person_id: p_GAVRCfV2ZcRXB4Ev474fK5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王注
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZL14WQ7qHspnFkkYgzgsN4
          claim_id: c_aETNGvGAjJUgPwaDF6KUAW
          source_id: s_ixqh5EPbKhcSrWhB1AdSSA
          stance: supports
          locator: CBDB:288610
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288610）
          source: &a1
            id: s_ixqh5EPbKhcSrWhB1AdSSA
            source_type: api_record
            title: 中国历代人物传记资料库：王注（CBDB 288610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288610&o=json
            external_identifier: CBDB:288610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NC9kjRcWAk2CPXUJ5oxbeN
        subject_person_id: p_GAVRCfV2ZcRXB4Ev474fK5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王注，明人物。嘉靖八年進士，籍贯南平。（中国历代人物传记资料库 CBDB 288610）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M55h3rPqwtK_KXoIyyWXZN
          claim_id: c_NC9kjRcWAk2CPXUJ5oxbeN
          source_id: s_ixqh5EPbKhcSrWhB1AdSSA
          stance: supports
          locator: CBDB:288610
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xKVPAw_TxlYOFpCmsJt4Fh
        subject_person_id: p_JKUVszPbyGjyE2dA3wdDiy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GAVRCfV2ZcRXB4Ev474fK5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qwhC8D3hvtIpXiovYS6rnl
          claim_id: c_xKVPAw_TxlYOFpCmsJt4Fh
          source_id: s_xRmTYCZdvd2VxdcNf1luJP
          stance: supports
          locator: CBDB：兄弟 王滋（202462）之父／母 王鎮
          quotation: null
          interpretation_note: 由兄弟关系推断：王注 与 王滋 为同胞（CBDB 记「兄」），王滋 之父／母即 王注 之父／母。
          source:
            id: s_xRmTYCZdvd2VxdcNf1luJP
            source_type: api_record
            title: 中国历代人物传记资料库：王注（CBDB 288610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288610&o=json
            external_identifier: CBDB:288610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JKUVszPbyGjyE2dA3wdDiy
        status: active
        display_name: 王鎮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Rdv68Z-vyuMkqVJy1m7WVN
        subject_person_id: p_GAVRCfV2ZcRXB4Ev474fK5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wrYjpDvL8MtRavfwnm1dKh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JBzzyPyvneM0gEYVFUTyJw
          claim_id: c_Rdv68Z-vyuMkqVJy1m7WVN
          source_id: s_xRmTYCZdvd2VxdcNf1luJP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202462 王滋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xRmTYCZdvd2VxdcNf1luJP
            source_type: api_record
            title: 中国历代人物传记资料库：王注（CBDB 288610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288610&o=json
            external_identifier: CBDB:288610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wrYjpDvL8MtRavfwnm1dKh
        status: active
        display_name: 王滋
        merged_into_person_id: null
---

# 王注

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王注 | accepted |
| bio.summary | 王注，明人物。嘉靖八年進士，籍贯南平。（中国历代人物传记资料库 CBDB 288610） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JKUVszPbyGjyE2dA3wdDiy | 王鎮 | accepted |
| other | p_wrYjpDvL8MtRavfwnm1dKh | 王滋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王注（CBDB 288610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288610&o=json)
