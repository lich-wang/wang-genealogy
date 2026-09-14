---
schema: wang-person/v1
id: p_MeFZQEb7d1NDXAkETnNC7B
status: active
merged_into: null
display_name: 王東美
cbdb_id: 19221
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p29JeCEFEPCRiReXDVRJ2j
        subject_person_id: p_MeFZQEb7d1NDXAkETnNC7B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王東美，宋人物。籍贯青神，入仕進士。（中国历代人物传记资料库 CBDB 19221）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_mHuTtZ1Tn44phBkl6ns5M_
          claim_id: c_p29JeCEFEPCRiReXDVRJ2j
          source_id: s_aimjSCSAYbaHhLNeeeAWM8
          stance: supports
          locator: CBDB:19221
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_aimjSCSAYbaHhLNeeeAWM8
            source_type: api_record
            title: 中国历代人物传记资料库：王東美（CBDB 19221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19221&o=json
            external_identifier: CBDB:19221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hc6qzYUD9MNRd137QrAKaE
        subject_person_id: p_MeFZQEb7d1NDXAkETnNC7B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王東美
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PP212XnD3WR42kTQGK7UyP
          claim_id: c_hc6qzYUD9MNRd137QrAKaE
          source_id: s_aimjSCSAYbaHhLNeeeAWM8
          stance: supports
          locator: CBDB:19221
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_CTgVNAKzQJpzLdag2P30cx
        subject_person_id: p_MeFZQEb7d1NDXAkETnNC7B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xWzYD3M371WEWE85XtDvKQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jWJnBFW4OV2dagc7PqZBQ0
          claim_id: c_CTgVNAKzQJpzLdag2P30cx
          source_id: s_HbLkesrWiHh50p0XDMgPKr
          stance: supports
          locator: CBDB 亲属：父（KinPerson 19221）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_HbLkesrWiHh50p0XDMgPKr
            source_type: api_record
            title: 中国历代人物传记资料库：王顗（CBDB 19224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19224&o=json
            external_identifier: CBDB:19224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xWzYD3M371WEWE85XtDvKQ
        status: active
        display_name: 王顗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_eME5xmL6KFXyFc9PaLAA8H
        subject_person_id: p_MeFZQEb7d1NDXAkETnNC7B
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_c6rhtMokSHkAsFNm8VHLaa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xce46tOA2cCRVOjIFaKXKR
          claim_id: c_eME5xmL6KFXyFc9PaLAA8H
          source_id: s_2PMbTrg-nqqtPa7BCx0YtX
          stance: supports
          locator: CBDB 双向互证（妻子 蘇氏(王東美妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2PMbTrg-nqqtPa7BCx0YtX
            source_type: api_record
            title: 中国历代人物传记资料库：蘇氏(王東美妻)（CBDB 5317）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5317&o=json
            external_identifier: CBDB:5317
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_c6rhtMokSHkAsFNm8VHLaa
        status: active
        display_name: 蘇氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_UpWFU95iAb5cA6rUzSEbhf
        subject_person_id: p_MeFZQEb7d1NDXAkETnNC7B
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_d79JMkVEEPc8b8Z2w7ojav
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S71oK2t2gEkXco4hY1tGkd
          claim_id: c_UpWFU95iAb5cA6rUzSEbhf
          source_id: s_p9sx3B4iaMFjwbP9GsxtF4
          stance: supports
          locator: CBDB 双向互证（祖父 王東美 ⇄ 孫 王慶）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_p9sx3B4iaMFjwbP9GsxtF4
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 19225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19225&o=json
            external_identifier: CBDB:19225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.730Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_d79JMkVEEPc8b8Z2w7ojav
        status: active
        display_name: 王慶
        merged_into_person_id: null
  other: []
---

# 王東美

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王東美，宋人物。籍贯青神，入仕進士。（中国历代人物传记资料库 CBDB 19221） | accepted |
| name.primary | 王東美 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xWzYD3M371WEWE85XtDvKQ | 王顗 | accepted |
| spouses | p_c6rhtMokSHkAsFNm8VHLaa | 蘇氏 | accepted |
| descendants | p_d79JMkVEEPc8b8Z2w7ojav | 王慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：蘇氏(王東美妻)（CBDB 5317）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5317&o=json)
- [中国历代人物传记资料库：王東美（CBDB 19221）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19221&o=json)
- [中国历代人物传记资料库：王慶（CBDB 19225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19225&o=json)
- [中国历代人物传记资料库：王顗（CBDB 19224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19224&o=json)
