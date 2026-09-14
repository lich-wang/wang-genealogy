---
schema: wang-person/v1
id: p_me4wZDW82AptuX6cVAdTa3
status: active
merged_into: null
display_name: 王育仁
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6TrX9JBEtGb2pW44j7gBGn
        subject_person_id: p_me4wZDW82AptuX6cVAdTa3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王育仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DD2HoyNQH8A4trJ5MH1R2a
          claim_id: c_6TrX9JBEtGb2pW44j7gBGn
          source_id: s_7LkcXKMDd9upGCRdBAoXCz
          stance: supports
          locator: CBDB:204809
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204809）
          source: &a1
            id: s_7LkcXKMDd9upGCRdBAoXCz
            source_type: api_record
            title: 中国历代人物传记资料库：王育仁（CBDB 204809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204809&o=json
            external_identifier: CBDB:204809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_F15pcnAgaQACgnZx7ZKiXd
        subject_person_id: p_me4wZDW82AptuX6cVAdTa3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1533年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DsXtbTjo9murZ7um9yTh3c
          claim_id: c_F15pcnAgaQACgnZx7ZKiXd
          source_id: s_7LkcXKMDd9upGCRdBAoXCz
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
        id: c_zvUbf2GCBBuZbjpV3SmZK2
        subject_person_id: p_me4wZDW82AptuX6cVAdTa3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王育仁（生于1533年），明人物。明清進士進士，籍贯泰和，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 204809）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w1deJprD0Az2IE9yvHNmZF
          claim_id: c_zvUbf2GCBBuZbjpV3SmZK2
          source_id: s_7LkcXKMDd9upGCRdBAoXCz
          stance: supports
          locator: CBDB:204809
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kJmCNRigm1BkyULxYvdV8l
        subject_person_id: p_TmfDTs3dgFgWzEaJva1cPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_me4wZDW82AptuX6cVAdTa3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kf1VsJKx8ahNF0iw7mlOKr
          claim_id: c_kJmCNRigm1BkyULxYvdV8l
          source_id: s_7LkcXKMDd9upGCRdBAoXCz
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第四十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TmfDTs3dgFgWzEaJva1cPF
        status: active
        display_name: 王親臣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_zi65hoRscufGlonMGBcn92
        subject_person_id: p_me4wZDW82AptuX6cVAdTa3
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ChnS3dmfKPLGWp2n5J2w59
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FBk-S_FtfstGeCTQ9eqDns
          claim_id: c_zi65hoRscufGlonMGBcn92
          source_id: s_lOIOYFSiErsjwGRBZP9G92
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第四十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_lOIOYFSiErsjwGRBZP9G92
            source_type: api_record
            title: 中国历代人物传记资料库：曾氏(王育仁妻)（CBDB 324375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324375&o=json
            external_identifier: CBDB:324375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ChnS3dmfKPLGWp2n5J2w59
        status: active
        display_name: 曾氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_9s5R10TTJ73S8Y-4VElhVq
        subject_person_id: p_uhy43vUK7iZvhpKmoJs64Z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_me4wZDW82AptuX6cVAdTa3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YvU2WladA9Abul4d2BJoCS
          claim_id: c_9s5R10TTJ73S8Y-4VElhVq
          source_id: s_7LkcXKMDd9upGCRdBAoXCz
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第四十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uhy43vUK7iZvhpKmoJs64Z
        status: active
        display_name: 王學謹
        merged_into_person_id: null
    - claim:
        id: c_MYCINthqM9Is4BRz3bHKmk
        subject_person_id: p_tG54NX3L9QgHMN5PPDpd1y
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_me4wZDW82AptuX6cVAdTa3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GEorxMz7fkpHOnqLCU3Hz7
          claim_id: c_MYCINthqM9Is4BRz3bHKmk
          source_id: s_7LkcXKMDd9upGCRdBAoXCz
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第四十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tG54NX3L9QgHMN5PPDpd1y
        status: active
        display_name: 王國成
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_orTvAPg6Sapj98MW_OkHBX
        subject_person_id: p_me4wZDW82AptuX6cVAdTa3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yuJsD4Y8xBGzggDCT99o44
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j5pa4n7KQ-6e-uFlQ9tEpA
          claim_id: c_orTvAPg6Sapj98MW_OkHBX
          source_id: s_4qL5vshGJE48Mm_466EFdC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204809 王育仁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4qL5vshGJE48Mm_466EFdC
            source_type: api_record
            title: 中国历代人物传记资料库：王育德（CBDB 324376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324376&o=json
            external_identifier: CBDB:324376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yuJsD4Y8xBGzggDCT99o44
        status: active
        display_name: 王育德
        merged_into_person_id: null
---

# 王育仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王育仁 | accepted |
| birth.date | 1533年 | accepted |
| bio.summary | 王育仁（生于1533年），明人物。明清進士進士，籍贯泰和，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 204809） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TmfDTs3dgFgWzEaJva1cPF | 王親臣 | accepted |
| spouses | p_ChnS3dmfKPLGWp2n5J2w59 | 曾氏 | accepted |
| ancestors | p_uhy43vUK7iZvhpKmoJs64Z | 王學謹 | accepted |
| ancestors | p_tG54NX3L9QgHMN5PPDpd1y | 王國成 | accepted |
| other | p_yuJsD4Y8xBGzggDCT99o44 | 王育德 | accepted |

## 外部来源

- [中国历代人物传记资料库：曾氏(王育仁妻)（CBDB 324375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324375&o=json)
- [中国历代人物传记资料库：王育德（CBDB 324376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324376&o=json)
- [中国历代人物传记资料库：王育仁（CBDB 204809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204809&o=json)
