---
schema: wang-person/v1
id: p_32HaAuTnPzTfj2DWDnSPK8
status: active
merged_into: null
display_name: 王宣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XBt7wb23VMmHabipmuMSpU
        subject_person_id: p_32HaAuTnPzTfj2DWDnSPK8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CjYVWcbJKkUVxS2xbPAuV3
          claim_id: c_XBt7wb23VMmHabipmuMSpU
          source_id: s_BjJN7NVQgmcfXMSrwk8heN
          stance: supports
          locator: CBDB:139473
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139473）
          source: &a1
            id: s_BjJN7NVQgmcfXMSrwk8heN
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 139473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139473&o=json
            external_identifier: CBDB:139473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RphqEpFcNFQYXVozFBUEnm
        subject_person_id: p_32HaAuTnPzTfj2DWDnSPK8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 587年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fw58ydPvQ4jwq6msAbcXsQ
          claim_id: c_RphqEpFcNFQYXVozFBUEnm
          source_id: s_BjJN7NVQgmcfXMSrwk8heN
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
        id: c_DG2XXL5ZsLAMW1e2nFGpGH
        subject_person_id: p_32HaAuTnPzTfj2DWDnSPK8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 665年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S87GeEzkK7kxFuL4zNPm8R
          claim_id: c_DG2XXL5ZsLAMW1e2nFGpGH
          source_id: s_BjJN7NVQgmcfXMSrwk8heN
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
        id: c_WpWLTu7U1weQK729L9HEnN
        subject_person_id: p_32HaAuTnPzTfj2DWDnSPK8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣（587年—665年），唐人物。籍贯太原，曾任朝散大夫、上儀同三司、建節尉。（中国历代人物传记资料库 CBDB 139473）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uSv6VDCT-HU-FAY32EFGSk
          claim_id: c_WpWLTu7U1weQK729L9HEnN
          source_id: s_BjJN7NVQgmcfXMSrwk8heN
          stance: supports
          locator: CBDB:139473
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_orTEU72YoQvcqPjUkK188g
        subject_person_id: p_MWMJXpzyEeq5R13wNCrRf3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_32HaAuTnPzTfj2DWDnSPK8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oMR3TnO6oad3By4O88I3lH
          claim_id: c_orTEU72YoQvcqPjUkK188g
          source_id: s_BjJN7NVQgmcfXMSrwk8heN
          stance: supports
          locator: 唐代墓誌匯編:二卷，Linde 64：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MWMJXpzyEeq5R13wNCrRf3
        status: active
        display_name: 王穆
        merged_into_person_id: null
  children:
    - claim:
        id: c_uHPuAJAgPPNqqPik42Fc5E
        subject_person_id: p_32HaAuTnPzTfj2DWDnSPK8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nnj6RXkzzxVB31PNFKMMTB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qqa-2ds_5FGyz2n-w77TUP
          claim_id: c_uHPuAJAgPPNqqPik42Fc5E
          source_id: s_BjJN7NVQgmcfXMSrwk8heN
          stance: supports
          locator: 唐代墓誌匯編:二卷，Linde 64：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nnj6RXkzzxVB31PNFKMMTB
        status: active
        display_name: 王敬賓
        merged_into_person_id: null
    - claim:
        id: c_G9tUaWHS9ONKVfpoTfnPuy
        subject_person_id: p_32HaAuTnPzTfj2DWDnSPK8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uvmhMuE79aBNYhw1VEDmkJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tzahoLOs1rV3-lif_Mfm75
          claim_id: c_G9tUaWHS9ONKVfpoTfnPuy
          source_id: s_BjJN7NVQgmcfXMSrwk8heN
          stance: supports
          locator: 唐代墓誌匯編:二卷，Linde 64：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uvmhMuE79aBNYhw1VEDmkJ
        status: active
        display_name: 王粲仁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_LDIY1Sec8-FH6QcTazxndR
        subject_person_id: p_32HaAuTnPzTfj2DWDnSPK8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JaB1Ya8rfLiRXjkgFHbjFJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KCMFiZ__alvuTzFLJkLCM3
          claim_id: c_LDIY1Sec8-FH6QcTazxndR
          source_id: s_7H9rR78EKvvOYi1mq-hNtw
          stance: supports
          locator: 唐代墓誌匯編:二卷，Linde 64：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7H9rR78EKvvOYi1mq-hNtw
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王宣妻)（CBDB 148094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148094&o=json
            external_identifier: CBDB:148094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JaB1Ya8rfLiRXjkgFHbjFJ
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| birth.date | 587年 | accepted |
| death.date | 665年 | accepted |
| bio.summary | 王宣（587年—665年），唐人物。籍贯太原，曾任朝散大夫、上儀同三司、建節尉。（中国历代人物传记资料库 CBDB 139473） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MWMJXpzyEeq5R13wNCrRf3 | 王穆 | accepted |
| children | p_nnj6RXkzzxVB31PNFKMMTB | 王敬賓 | accepted |
| children | p_uvmhMuE79aBNYhw1VEDmkJ | 王粲仁 | accepted |
| spouses | p_JaB1Ya8rfLiRXjkgFHbjFJ | 張氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宣（CBDB 139473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139473&o=json)
- [中国历代人物传记资料库：張氏(王宣妻)（CBDB 148094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148094&o=json)
