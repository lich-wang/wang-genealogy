---
schema: wang-person/v1
id: p_H4Uy6ApLcV6Le6pdH8Y4bo
status: active
merged_into: null
display_name: 王材
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ApgG1jxRUNQEkderi3Vrmj
        subject_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MCqiQZ2ux21L6pcLBCPYSU
          claim_id: c_ApgG1jxRUNQEkderi3Vrmj
          source_id: s_KR4KbMbo5WjrLwGk2VkQGn
          stance: supports
          locator: CBDB:126534
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126534）
          source: &a1
            id: s_KR4KbMbo5WjrLwGk2VkQGn
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 126534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126534&o=json
            external_identifier: CBDB:126534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.005Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_48fL9TDe49qrqBH9vKQ1uC
        subject_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1508年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6TRjvzJ9LxxvHwQHqDNsvx
          claim_id: c_48fL9TDe49qrqBH9vKQ1uC
          source_id: s_KR4KbMbo5WjrLwGk2VkQGn
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
        id: c_FRw16bfjEB9fh38GcT5QwE
        subject_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1584年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_byQQ5h5CZYskYKxuq5pai9
          claim_id: c_FRw16bfjEB9fh38GcT5QwE
          source_id: s_KR4KbMbo5WjrLwGk2VkQGn
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
        id: c_gYaNEQKZNqCk4zt7j1qaeC
        subject_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材（1508年—1584年），明人物。籍贯南豐，身份为博學之人，入仕進士，曾任國子司業、檢討、司業。（中国历代人物传记资料库 CBDB 126534）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CZzMgVaN3jAl4b8zkjh1NL
          claim_id: c_gYaNEQKZNqCk4zt7j1qaeC
          source_id: s_KR4KbMbo5WjrLwGk2VkQGn
          stance: supports
          locator: CBDB:126534
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fmyhD9WfZGeph0roJyba_X
        subject_person_id: p_hGzTEBArhtNBmqP8bhoNhy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L9BEqA5dR7iQfu_5n2FaIk
          claim_id: c_fmyhD9WfZGeph0roJyba_X
          source_id: s_L9QNjobGVNfVRmQosp9J9Q
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百三十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_L9QNjobGVNfVRmQosp9J9Q
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 304455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304455&o=json
            external_identifier: CBDB:304455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.716Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hGzTEBArhtNBmqP8bhoNhy
        status: active
        display_name: 王祿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_XaiMQEJrgXgIe7Pe5PwnWz
        subject_person_id: p_3P7MMurQD6yAUfxDy6dUEQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DUd_vOXFTa5smMrkRyYlVN
          claim_id: c_XaiMQEJrgXgIe7Pe5PwnWz
          source_id: s_cR9bN1d58sbx16Jq6BPTn7
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百三十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cR9bN1d58sbx16Jq6BPTn7
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 304454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304454&o=json
            external_identifier: CBDB:304454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.714Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3P7MMurQD6yAUfxDy6dUEQ
        status: active
        display_name: 王達
        merged_into_person_id: null
    - claim:
        id: c_dkbLVSu6qjfRekcglfiAIE
        subject_person_id: p_ijapVPqmZiMmk8QNoAXPjy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JuthQI0kPOp6dxgTlkkuan
          claim_id: c_dkbLVSu6qjfRekcglfiAIE
          source_id: s_2CDqHE5qeD4R81BxekctEH
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百三十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2CDqHE5qeD4R81BxekctEH
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 304453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304453&o=json
            external_identifier: CBDB:304453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.712Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ijapVPqmZiMmk8QNoAXPjy
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_wjlqXQUKcltwRad6fSWco8
        subject_person_id: p_4Kk6qNfSJYpHQHN1WVLqmn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_52a506duRlLTPE48MmtMyB
          claim_id: c_wjlqXQUKcltwRad6fSWco8
          source_id: s_9b_nZ2CC4WRiC9I9x_9xgq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126534 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9b_nZ2CC4WRiC9I9x_9xgq
            source_type: api_record
            title: 中国历代人物传记资料库：王檟（CBDB 304466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304466&o=json
            external_identifier: CBDB:304466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4Kk6qNfSJYpHQHN1WVLqmn
        status: active
        display_name: 王檟
        merged_into_person_id: null
    - claim:
        id: c_abF6lqanM_GiioGr2yvgJA
        subject_person_id: p_FBT3C8pvdwjHgahcUZ9Ajw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fIGG2xbVMj_Is87-2-PODU
          claim_id: c_abF6lqanM_GiioGr2yvgJA
          source_id: s_3T2Umjm5oZ9FdXWMPlVh4W
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126534 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3T2Umjm5oZ9FdXWMPlVh4W
            source_type: api_record
            title: 中国历代人物传记资料库：王棐（CBDB 304465）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304465&o=json
            external_identifier: CBDB:304465
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FBT3C8pvdwjHgahcUZ9Ajw
        status: active
        display_name: 王棐
        merged_into_person_id: null
    - claim:
        id: c_QRAfzVxDdkTUJK5wZ-lbQC
        subject_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_craNeTYRsCsjpnfPb5YZHB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qsFnH0geewY88r2TiRAm9j
          claim_id: c_QRAfzVxDdkTUJK5wZ-lbQC
          source_id: s_gO6qeFgoh20fX_laalLVoK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126534 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gO6qeFgoh20fX_laalLVoK
            source_type: api_record
            title: 中国历代人物传记资料库：王休（CBDB 304462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304462&o=json
            external_identifier: CBDB:304462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_craNeTYRsCsjpnfPb5YZHB
        status: active
        display_name: 王休
        merged_into_person_id: null
    - claim:
        id: c_EjjKPwKi177a4_l4g21nHW
        subject_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jsvA9Jcpw1enAzLDEcNsg2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2tS7SvwoizaxM3JQ4PkAFU
          claim_id: c_EjjKPwKi177a4_l4g21nHW
          source_id: s_L85JsPepw3o-rhEhhdc1Pm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126534 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_L85JsPepw3o-rhEhhdc1Pm
            source_type: api_record
            title: 中国历代人物传记资料库：王標（CBDB 304461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304461&o=json
            external_identifier: CBDB:304461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jsvA9Jcpw1enAzLDEcNsg2
        status: active
        display_name: 王標
        merged_into_person_id: null
    - claim:
        id: c_GFJ0FFHd1e_mVWn-ZxvpYU
        subject_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kH7u1nRgcnT3hj73244Ve3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wAutkHE07x9y-kfRfHwE2s
          claim_id: c_GFJ0FFHd1e_mVWn-ZxvpYU
          source_id: s_s-0lGtdjdBdWJMfGzqlGlG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126534 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_s-0lGtdjdBdWJMfGzqlGlG
            source_type: api_record
            title: 中国历代人物传记资料库：王臬（CBDB 304464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304464&o=json
            external_identifier: CBDB:304464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kH7u1nRgcnT3hj73244Ve3
        status: active
        display_name: 王臬
        merged_into_person_id: null
    - claim:
        id: c_0WH31XL-sWPvwGcf3YJNdp
        subject_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vZzVN4SUg9s9NL3nKJPDmX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tfsZi67hXMseLTMF1i7C2e
          claim_id: c_0WH31XL-sWPvwGcf3YJNdp
          source_id: s_Eo4cd2B-egTYohAT_4Bdmr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126534 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Eo4cd2B-egTYohAT_4Bdmr
            source_type: api_record
            title: 中国历代人物传记资料库：王檄（CBDB 304463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304463&o=json
            external_identifier: CBDB:304463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vZzVN4SUg9s9NL3nKJPDmX
        status: active
        display_name: 王檄
        merged_into_person_id: null
---

# 王材

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王材 | accepted |
| birth.date | 1508年 | accepted |
| death.date | 1584年 | accepted |
| bio.summary | 王材（1508年—1584年），明人物。籍贯南豐，身份为博學之人，入仕進士，曾任國子司業、檢討、司業。（中国历代人物传记资料库 CBDB 126534） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hGzTEBArhtNBmqP8bhoNhy | 王祿 | accepted |
| ancestors | p_3P7MMurQD6yAUfxDy6dUEQ | 王達 | accepted |
| ancestors | p_ijapVPqmZiMmk8QNoAXPjy | 王鼎 | accepted |
| other | p_4Kk6qNfSJYpHQHN1WVLqmn | 王檟 | accepted |
| other | p_FBT3C8pvdwjHgahcUZ9Ajw | 王棐 | accepted |
| other | p_craNeTYRsCsjpnfPb5YZHB | 王休 | accepted |
| other | p_jsvA9Jcpw1enAzLDEcNsg2 | 王標 | accepted |
| other | p_kH7u1nRgcnT3hj73244Ve3 | 王臬 | accepted |
| other | p_vZzVN4SUg9s9NL3nKJPDmX | 王檄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王標（CBDB 304461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304461&o=json)
- [中国历代人物传记资料库：王材（CBDB 126534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126534&o=json)
- [中国历代人物传记资料库：王達（CBDB 304454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304454&o=json)
- [中国历代人物传记资料库：王鼎（CBDB 304453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304453&o=json)
- [中国历代人物传记资料库：王棐（CBDB 304465）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304465&o=json)
- [中国历代人物传记资料库：王檟（CBDB 304466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304466&o=json)
- [中国历代人物传记资料库：王祿（CBDB 304455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304455&o=json)
- [中国历代人物传记资料库：王臬（CBDB 304464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304464&o=json)
- [中国历代人物传记资料库：王檄（CBDB 304463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304463&o=json)
- [中国历代人物传记资料库：王休（CBDB 304462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304462&o=json)
