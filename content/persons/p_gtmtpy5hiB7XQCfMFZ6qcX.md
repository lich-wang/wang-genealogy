---
schema: wang-person/v1
id: p_gtmtpy5hiB7XQCfMFZ6qcX
status: active
merged_into: null
display_name: 王子京
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aduW3e67HD97WSH1W7Aow9
        subject_person_id: p_gtmtpy5hiB7XQCfMFZ6qcX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子京
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_azAUykiNKsAyoSXZDS3mHv
          claim_id: c_aduW3e67HD97WSH1W7Aow9
          source_id: s_9QxeyJN6CCbmK4pmwUWcNJ
          stance: supports
          locator: CBDB:1909
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1909）
          source: &a1
            id: s_9QxeyJN6CCbmK4pmwUWcNJ
            source_type: api_record
            title: 中国历代人物传记资料库：王子京（CBDB 1909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1909&o=json
            external_identifier: CBDB:1909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.390Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kSL9Ns153Bcd9Dmf3KLtyf
        subject_person_id: p_gtmtpy5hiB7XQCfMFZ6qcX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子京，宋人物。籍贯蓬萊，曾任提舉、提舉市舶司官、朝奉大夫。（中国历代人物传记资料库 CBDB 1909）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aDMn1eCnUJ-0CCoKYComph
          claim_id: c_kSL9Ns153Bcd9Dmf3KLtyf
          source_id: s_9QxeyJN6CCbmK4pmwUWcNJ
          stance: supports
          locator: CBDB:1909
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rRSHz_TpUXicmuwFYhU2ZH
        subject_person_id: p_fXrAzDcQUb9KZoaoztu9Rn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gtmtpy5hiB7XQCfMFZ6qcX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kyn-cnLsLEbVm1MrF6_79W
          claim_id: c_rRSHz_TpUXicmuwFYhU2ZH
          source_id: s_iSadKlHuAohxEGBKqxuluK
          stance: supports
          locator: CBDB 亲属：父（KinPerson 27011）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_iSadKlHuAohxEGBKqxuluK
            source_type: api_record
            title: 中国历代人物传记资料库：王子京（CBDB 1909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1909&o=json
            external_identifier: CBDB:1909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fXrAzDcQUb9KZoaoztu9Rn
        status: active
        display_name: 王世昌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FjteFGpTvdzug-L0AZTOpf
        subject_person_id: p_17a7h6QnbHXFMMvBUxCLbB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gtmtpy5hiB7XQCfMFZ6qcX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8fkFjimUvNPCTKHrrmgu0X
          claim_id: c_FjteFGpTvdzug-L0AZTOpf
          source_id: s_iSadKlHuAohxEGBKqxuluK
          stance: supports
          locator: CBDB 亲属：兄弟（KinPerson 7383 王子韶）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iSadKlHuAohxEGBKqxuluK
            source_type: api_record
            title: 中国历代人物传记资料库：王子京（CBDB 1909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1909&o=json
            external_identifier: CBDB:1909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_17a7h6QnbHXFMMvBUxCLbB
        status: active
        display_name: 王子韶
        merged_into_person_id: null
---

# 王子京

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子京 | accepted |
| bio.summary | 王子京，宋人物。籍贯蓬萊，曾任提舉、提舉市舶司官、朝奉大夫。（中国历代人物传记资料库 CBDB 1909） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fXrAzDcQUb9KZoaoztu9Rn | 王世昌 | accepted |
| other | p_17a7h6QnbHXFMMvBUxCLbB | 王子韶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子京（CBDB 1909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1909&o=json)
