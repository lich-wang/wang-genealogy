---
schema: wang-person/v1
id: p_DHbqGXMHDUDbi5qvE74UDS
status: active
merged_into: null
display_name: 王奂
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GZzevWnbWUftuZ6xJdPJhn
        subject_person_id: p_DHbqGXMHDUDbi5qvE74UDS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奂（生于435年），齐尚书左仆射、使持节、镇北将军、雍州刺史。维基数据以独立条目 Q22814768 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_cms9ockawZl9fIoR1WtsNG
          claim_id: c_GZzevWnbWUftuZ6xJdPJhn
          source_id: s_3zRe6TULU1Be3ts4o7dG7u
          stance: supports
          locator: Q22814768
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_3zRe6TULU1Be3ts4o7dG7u
            source_type: api_record
            title: 维基数据：王奂（Q22814768）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814768
            external_identifier: Q22814768
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:48.465Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%82
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_u6PGU4SxYi4DVRW4Kqrzp2
        subject_person_id: p_DHbqGXMHDUDbi5qvE74UDS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 435年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0435-01-01
            latest: 0435-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sP8h727bwb6vJVunVuexo7
          claim_id: c_u6PGU4SxYi4DVRW4Kqrzp2
          source_id: s_3zRe6TULU1Be3ts4o7dG7u
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_3zRe6TULU1Be3ts4o7dG7u
            source_type: api_record
            title: 维基数据：王奂（Q22814768）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814768
            external_identifier: Q22814768
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:48.465Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%82
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y88n55Ae39bWtpM51RAtPe
        subject_person_id: p_DHbqGXMHDUDbi5qvE74UDS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奂
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fN5u8d9TvgkHFyFj9BL7ah
          claim_id: c_Y88n55Ae39bWtpM51RAtPe
          source_id: s_3zRe6TULU1Be3ts4o7dG7u
          stance: supports
          locator: Q22814768
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Hxp4W3Lk2VLAMKPRA1WwPh
        subject_person_id: p_DVJq6ki7XADytLWL91vZ3w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DHbqGXMHDUDbi5qvE74UDS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_zgGwkfcEB9wLpMf5REYv7D
          claim_id: c_Hxp4W3Lk2VLAMKPRA1WwPh
          source_id: s_VJtscsmoPHMJFWLdXMikZS
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_VJtscsmoPHMJFWLdXMikZS
            source_type: api_record
            title: 维基数据：王粹（Q22814769）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814769
            external_identifier: Q22814769
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:24.409Z
            metadata_json: null
        - id: cs_dDt6eCW7KBjq6qAof5jUCj
          claim_id: c_Hxp4W3Lk2VLAMKPRA1WwPh
          source_id: s_3zRe6TULU1Be3ts4o7dG7u
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_3zRe6TULU1Be3ts4o7dG7u
            source_type: api_record
            title: 维基数据：王奂（Q22814768）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814768
            external_identifier: Q22814768
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:48.465Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%82
      object_person:
        id: p_DVJq6ki7XADytLWL91vZ3w
        status: active
        display_name: 王粹
        merged_into_person_id: null
  children:
    - claim:
        id: c_4St98MzYnt4p9yAcGeYYgZ
        subject_person_id: p_DHbqGXMHDUDbi5qvE74UDS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5AMv9WBqacZuT86WkDC25v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_e4GA72r8wezznGEfTKDHfT
          claim_id: c_4St98MzYnt4p9yAcGeYYgZ
          source_id: s_3zRe6TULU1Be3ts4o7dG7u
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3zRe6TULU1Be3ts4o7dG7u
            source_type: api_record
            title: 维基数据：王奂（Q22814768）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814768
            external_identifier: Q22814768
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:48.465Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%82
        - id: cs_3t7aUC8Zvry57ufFezYgM6
          claim_id: c_4St98MzYnt4p9yAcGeYYgZ
          source_id: s_fpGHJUb9sFa3Lu1QgrjA68
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_fpGHJUb9sFa3Lu1QgrjA68
            source_type: api_record
            title: 维基数据：王肃（Q4273020）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4273020
            external_identifier: Q4273020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:44.689Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%82%83_(%E5%8D%97%E5%8C%97%E6%9C%9D)
        - id: cs_U1wxXWP7QMudsrfztqmLB5
          claim_id: c_4St98MzYnt4p9yAcGeYYgZ
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王奂 → 王肃
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_qZdjFa7igYvVxFruFc76hy
          claim_id: c_4St98MzYnt4p9yAcGeYYgZ
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王奂 → 王肃
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person:
        id: p_5AMv9WBqacZuT86WkDC25v
        status: active
        display_name: 王肃
        merged_into_person_id: null
    - claim:
        id: c_x4a5FZKZg5h98vp1G6cjYu
        subject_person_id: p_DHbqGXMHDUDbi5qvE74UDS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LSr2FsGq3jMfSxr6puXDCR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_V3xcCXLndtpYpDXTxhGpb5
          claim_id: c_x4a5FZKZg5h98vp1G6cjYu
          source_id: s_3zRe6TULU1Be3ts4o7dG7u
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3zRe6TULU1Be3ts4o7dG7u
            source_type: api_record
            title: 维基数据：王奂（Q22814768）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814768
            external_identifier: Q22814768
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:48.465Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%82
        - id: cs_FgVdYrjgSYXDoA84nJkuph
          claim_id: c_x4a5FZKZg5h98vp1G6cjYu
          source_id: s_wxS2wnZsRoxd2eKTrDMVs9
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_wxS2wnZsRoxd2eKTrDMVs9
            source_type: api_record
            title: 维基数据：王琛（Q22814923）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814923
            external_identifier: Q22814923
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:48.145Z
            metadata_json: null
      object_person:
        id: p_LSr2FsGq3jMfSxr6puXDCR
        status: active
        display_name: 王琛
        merged_into_person_id: null
    - claim:
        id: c_3BbfMFwpEGvwCMMBNpnjHf
        subject_person_id: p_DHbqGXMHDUDbi5qvE74UDS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Uf38YCijsBekSGKYAqdP3f
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zqD3RbBHK3Y89Ft15jdZnB
          claim_id: c_3BbfMFwpEGvwCMMBNpnjHf
          source_id: s_Jo51CxhY3vQx2gjreCaA4C
          stance: supports
          locator: 条文：之子/之女
          quotation: 王秉，北史因避讳李昞将他改名康，字文政，琅邪郡临沂县（今山东省临沂市）人，南齐尚书左仆射王奂之子，北魏官员
          interpretation_note: null
          source:
            id: s_Jo51CxhY3vQx2gjreCaA4C
            source_type: website
            title: 中文维基百科：王秉 (幽州刺史)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A7%89_(%E5%B9%BD%E5%B7%9E%E5%88%BA%E5%8F%B2)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:50.180Z
            metadata_json: null
        - id: cs_48ABvHQkG8oAGXDYEKzCHT
          claim_id: c_3BbfMFwpEGvwCMMBNpnjHf
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王奂 → 王秉
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_y73w5tE9ZwavTMK5amdFVV
          claim_id: c_3BbfMFwpEGvwCMMBNpnjHf
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王奂 → 王秉
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person:
        id: p_Uf38YCijsBekSGKYAqdP3f
        status: active
        display_name: 王秉
        merged_into_person_id: null
    - claim:
        id: c_UmJcJ7nL77hTG4NK8z6i4B
        subject_person_id: p_DHbqGXMHDUDbi5qvE74UDS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_frEhYn5TE3guUSKyfRkJRL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iJuL1PMJz1rM1s96zr5L9H
          claim_id: c_UmJcJ7nL77hTG4NK8z6i4B
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王奂 → 王彪
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_984rR7P2JtrsMS9gUwHEfP
          claim_id: c_UmJcJ7nL77hTG4NK8z6i4B
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王奂 → 王彪
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person:
        id: p_frEhYn5TE3guUSKyfRkJRL
        status: active
        display_name: 王彪
        merged_into_person_id: null
    - claim:
        id: c_FWrtc7tHZi7BB6SfRT52tm
        subject_person_id: p_DHbqGXMHDUDbi5qvE74UDS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_LxDT2MpjPJ5TJ5PVMYm86F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PvNntpmQ1o9NWdzm3eNrgw
          claim_id: c_FWrtc7tHZi7BB6SfRT52tm
          source_id: s_gcmV2ppkrnuLchvJWyEmoD
          stance: supports
          locator: 卷四十九·王奂传
          quotation: 執彪及弟爽、弼……皆伏誅。
          interpretation_note: null
          source:
            id: s_gcmV2ppkrnuLchvJWyEmoD
            source_type: book
            title: 中文维基文库：南齊書/卷49
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E5%8D%97%E9%BD%8A%E6%9B%B8/%E5%8D%B749
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-31T16:03:21.429Z
            metadata_json: null
      object_person:
        id: p_LxDT2MpjPJ5TJ5PVMYm86F
        status: active
        display_name: 王弼
        merged_into_person_id: null
    - claim:
        id: c_CTpJWguYqjaRNz52d7vBqu
        subject_person_id: p_DHbqGXMHDUDbi5qvE74UDS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_uJJCdHNQ7Yn3ZFfy6ddaym
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G1agW7CTCtnBUR7dk7wofC
          claim_id: c_CTpJWguYqjaRNz52d7vBqu
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王奂 → 王爽
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
        - id: cs_ZWghw5LQQb4YMMY2KqJFGq
          claim_id: c_CTpJWguYqjaRNz52d7vBqu
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王奂 → 王爽
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
      object_person:
        id: p_uJJCdHNQ7Yn3ZFfy6ddaym
        status: active
        display_name: 王爽
        merged_into_person_id: null
    - claim:
        id: c_QW3iTRALkvTRLQirTEdWyB
        subject_person_id: p_DHbqGXMHDUDbi5qvE74UDS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_mxbESjeJMqx1uiQKJg1sN2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MAEC1WbwnLAaxyUoEEDSSz
          claim_id: c_QW3iTRALkvTRLQirTEdWyB
          source_id: s_3zRe6TULU1Be3ts4o7dG7u
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3zRe6TULU1Be3ts4o7dG7u
            source_type: api_record
            title: 维基数据：王奂（Q22814768）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814768
            external_identifier: Q22814768
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:48.465Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%82
        - id: cs_vCg8uAkjmfNnwd6CamaPAf
          claim_id: c_QW3iTRALkvTRLQirTEdWyB
          source_id: s_vqNFCqY4uz7aao5dyhS51x
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vqNFCqY4uz7aao5dyhS51x
            source_type: api_record
            title: 维基数据：王融（Q16906208）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906208
            external_identifier: Q16906208
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:03.927Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%9E%8D_(%E5%A4%AA%E5%AD%90%E4%B8%AD%E5%BA%B6%E5%AD%90)
      object_person:
        id: p_mxbESjeJMqx1uiQKJg1sN2
        status: active
        display_name: 王融
        merged_into_person_id: null
  adoptive_parents:
    - claim:
        id: c_huSKSEr2xMe8WJ6FDdjHb5
        subject_person_id: p_8HcdTp6omF8z3tjYeyQCFC
        claim_kind: relationship
        predicate: kinship.adoptive_father_of
        object_person_id: p_DHbqGXMHDUDbi5qvE74UDS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_rqihwFRP83ZHkQtwgoc2L5
          claim_id: c_huSKSEr2xMe8WJ6FDdjHb5
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王球 → 王奂
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_oPUkmJUXvQ4oaDLiqKxysK
          claim_id: c_huSKSEr2xMe8WJ6FDdjHb5
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王球 → 王奂
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
        - id: cs_PtFr7XFYEM1ihp64Ggk2UB
          claim_id: c_huSKSEr2xMe8WJ6FDdjHb5
          source_id: s_tNLBhpAGTwSg968Z18d4U2
          stance: supports
          locator: 卷十二·王奂
          quotation: 奂，僧虔从子。出继从祖中书令球，字彦孙。
          interpretation_note: “出继”说明王球是嗣父／养父；生父关系另由王粹一支来源支持。
          source:
            id: s_tNLBhpAGTwSg968Z18d4U2
            source_type: book
            title: 中文维基文库：《全齊文》卷十二·王奂
            creator: 严可均辑
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E5%85%A8%E9%BD%8A%E6%96%87/%E5%8D%B7%E5%8D%81%E4%BA%8C
            external_identifier: null
            license_code: public-domain
            accessed_at: 2026-09-03T02:57:13.365Z
            metadata_json: null
      object_person:
        id: p_8HcdTp6omF8z3tjYeyQCFC
        status: active
        display_name: 王球
        merged_into_person_id: null
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_87ryUZmCF9Vn41sws38rGZ
        subject_person_id: p_DHbqGXMHDUDbi5qvE74UDS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_K9rDPN1vgHMAL8qUA57FNm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jkvvFxXy3QG1rLifJ9Br2v
          claim_id: c_87ryUZmCF9Vn41sws38rGZ
          source_id: s_9RMest3FRa7aL19ghMxtq8
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王衍的祖父王奂，王奂被斩杀
          interpretation_note: null
          source:
            id: s_9RMest3FRa7aL19ghMxtq8
            source_type: website
            title: 中文维基百科：王衍 (南北朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%8D_(%E5%8D%97%E5%8C%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:54.705Z
            metadata_json: null
      object_person:
        id: p_K9rDPN1vgHMAL8qUA57FNm
        status: active
        display_name: 王衍
        merged_into_person_id: null
  other: []
---

# 王奂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王奂（生于435年），齐尚书左仆射、使持节、镇北将军、雍州刺史。维基数据以独立条目 Q22814768 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| birth.date | 435年 | accepted |
| name.primary | 王奂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DVJq6ki7XADytLWL91vZ3w | 王粹 | accepted |
| children | p_5AMv9WBqacZuT86WkDC25v | 王肃 | accepted |
| children | p_LSr2FsGq3jMfSxr6puXDCR | 王琛 | accepted |
| children | p_Uf38YCijsBekSGKYAqdP3f | 王秉 | accepted |
| children | p_frEhYn5TE3guUSKyfRkJRL | 王彪 | accepted |
| children | p_LxDT2MpjPJ5TJ5PVMYm86F | 王弼 | accepted |
| children | p_uJJCdHNQ7Yn3ZFfy6ddaym | 王爽 | accepted |
| children | p_mxbESjeJMqx1uiQKJg1sN2 | 王融 | accepted |
| adoptive_parents | p_8HcdTp6omF8z3tjYeyQCFC | 王球 | accepted |
| descendants | p_K9rDPN1vgHMAL8qUA57FNm | 王衍 | accepted |

## 外部来源

- [维基数据：王琛（Q22814923）](https://www.wikidata.org/wiki/Q22814923)
- [维基数据：王粹（Q22814769）](https://www.wikidata.org/wiki/Q22814769)
- [维基数据：王奂（Q22814768）](https://www.wikidata.org/wiki/Q22814768)
- [维基数据：王融（Q16906208）](https://www.wikidata.org/wiki/Q16906208)
- [维基数据：王肃（Q4273020）](https://www.wikidata.org/wiki/Q4273020)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王秉 (幽州刺史)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A7%89_(%E5%B9%BD%E5%B7%9E%E5%88%BA%E5%8F%B2))
- [中文维基百科：王衍 (南北朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%8D_(%E5%8D%97%E5%8C%97%E6%9C%9D))
- [中文维基文库：《全齊文》卷十二·王奂](https://zh.wikisource.org/wiki/%E5%85%A8%E9%BD%8A%E6%96%87/%E5%8D%B7%E5%8D%81%E4%BA%8C)
- [中文维基文库：南齊書/卷49](https://zh.wikisource.org/wiki/%E5%8D%97%E9%BD%8A%E6%9B%B8/%E5%8D%B749)
