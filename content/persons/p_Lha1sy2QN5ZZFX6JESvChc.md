---
schema: wang-person/v1
id: p_Lha1sy2QN5ZZFX6JESvChc
status: active
merged_into: null
display_name: 王基
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T2Da1rMSQKVLPvANLa3ASm
        subject_person_id: p_Lha1sy2QN5ZZFX6JESvChc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EPDKpqbPp635dkp2LHorCC
          claim_id: c_T2Da1rMSQKVLPvANLa3ASm
          source_id: s_rx6AZYG1MP4cK1ChxpqQ7x
          stance: supports
          locator: CBDB:126676
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126676）
          source: &a1
            id: s_rx6AZYG1MP4cK1ChxpqQ7x
            source_type: api_record
            title: 中国历代人物传记资料库：王基（CBDB 126676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126676&o=json
            external_identifier: CBDB:126676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.114Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pERqyTMmQUD57yQzk83ngm
        subject_person_id: p_Lha1sy2QN5ZZFX6JESvChc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王基，明人物。明清進士進士，籍贯萊陽，身份为以疾廢，入仕進士。（中国历代人物传记资料库 CBDB 126676）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5pIA7gAaPINH8pd_qAnRtt
          claim_id: c_pERqyTMmQUD57yQzk83ngm
          source_id: s_rx6AZYG1MP4cK1ChxpqQ7x
          stance: supports
          locator: CBDB:126676
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cEI5XvJmbpE_3F2X2XhYCn
        subject_person_id: p_6sYWcb482zJ4XWUwwNYJRi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Lha1sy2QN5ZZFX6JESvChc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OYLaNFoc8qmbuMHgI1ukgD
          claim_id: c_cEI5XvJmbpE_3F2X2XhYCn
          source_id: s_LsJRMtGNnaXWFhCvmWCGFM
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第二十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LsJRMtGNnaXWFhCvmWCGFM
            source_type: api_record
            title: 中国历代人物传记资料库：王士先（CBDB 329624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329624&o=json
            external_identifier: CBDB:329624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_6sYWcb482zJ4XWUwwNYJRi
        status: active
        display_name: 王士先
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_xuMq0O0kVAGoENY_R2jlZV
        subject_person_id: p_52CwNw799HD3TE11x2D2M3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Lha1sy2QN5ZZFX6JESvChc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MopQtjg9yw_-Ive3krCzED
          claim_id: c_xuMq0O0kVAGoENY_R2jlZV
          source_id: s_BKjAbKTMyvVyCu4csAt1qP
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第二十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BKjAbKTMyvVyCu4csAt1qP
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩（CBDB 329622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329622&o=json
            external_identifier: CBDB:329622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_52CwNw799HD3TE11x2D2M3
        status: active
        display_name: 王嵩
        merged_into_person_id: null
    - claim:
        id: c_lYl61F8bsRdc4_WtPqZKfu
        subject_person_id: p_52fz1XAFZcK8hpmrNkZw8t
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Lha1sy2QN5ZZFX6JESvChc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wBK8ZJUQuUbV_iRtbXr0Le
          claim_id: c_lYl61F8bsRdc4_WtPqZKfu
          source_id: s_K87cA1b5U7kiBapr8Ccr8G
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第二十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_K87cA1b5U7kiBapr8Ccr8G
            source_type: api_record
            title: 中国历代人物传记资料库：王南玉（CBDB 329623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329623&o=json
            external_identifier: CBDB:329623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_52fz1XAFZcK8hpmrNkZw8t
        status: active
        display_name: 王南玉
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_yWIzzIkswOJK9zkBWNLSSX
        subject_person_id: p_Lha1sy2QN5ZZFX6JESvChc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QRnnDR27ftNKQGRE1MogD3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qso9BzAYdLtkgdM7ZcODbh
          claim_id: c_yWIzzIkswOJK9zkBWNLSSX
          source_id: s_W2G6bqKZbH-HIA2ciHEOVD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126676 王基）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_W2G6bqKZbH-HIA2ciHEOVD
            source_type: api_record
            title: 中国历代人物传记资料库：王堪（CBDB 329629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329629&o=json
            external_identifier: CBDB:329629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QRnnDR27ftNKQGRE1MogD3
        status: active
        display_name: 王堪
        merged_into_person_id: null
    - claim:
        id: c_aXRr6Moo-Vg0XhY7Yc303f
        subject_person_id: p_Lha1sy2QN5ZZFX6JESvChc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZH788UkFLmZjivN3xNAjbZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M_SSU_jZ-dXd6SdJUnJIVe
          claim_id: c_aXRr6Moo-Vg0XhY7Yc303f
          source_id: s_1Qf40-YVIhUyyXQOZlmcpT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126676 王基）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1Qf40-YVIhUyyXQOZlmcpT
            source_type: api_record
            title: 中国历代人物传记资料库：王業（CBDB 329628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329628&o=json
            external_identifier: CBDB:329628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZH788UkFLmZjivN3xNAjbZ
        status: active
        display_name: 王業
        merged_into_person_id: null
---

# 王基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王基 | accepted |
| bio.summary | 王基，明人物。明清進士進士，籍贯萊陽，身份为以疾廢，入仕進士。（中国历代人物传记资料库 CBDB 126676） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6sYWcb482zJ4XWUwwNYJRi | 王士先 | accepted |
| ancestors | p_52CwNw799HD3TE11x2D2M3 | 王嵩 | accepted |
| ancestors | p_52fz1XAFZcK8hpmrNkZw8t | 王南玉 | accepted |
| other | p_QRnnDR27ftNKQGRE1MogD3 | 王堪 | accepted |
| other | p_ZH788UkFLmZjivN3xNAjbZ | 王業 | accepted |

## 外部来源

- [中国历代人物传记资料库：王基（CBDB 126676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126676&o=json)
- [中国历代人物传记资料库：王堪（CBDB 329629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329629&o=json)
- [中国历代人物传记资料库：王南玉（CBDB 329623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329623&o=json)
- [中国历代人物传记资料库：王士先（CBDB 329624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329624&o=json)
- [中国历代人物传记资料库：王嵩（CBDB 329622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329622&o=json)
- [中国历代人物传记资料库：王業（CBDB 329628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329628&o=json)
